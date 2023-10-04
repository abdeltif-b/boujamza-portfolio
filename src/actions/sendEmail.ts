"use server";

import React from "react";
import { Resend } from "resend";
import { getErrorMessage, flattenZodErrors } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import { z } from "zod";

const contactSchema = z.object({
  senderEmail: z.string().email().nonempty(),
  message: z.string().min(10).nonempty(),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  // validate input
  const validation = contactSchema.safeParse({
    senderEmail: formData.get("senderEmail"),
    message: formData.get("message"),
  });

  if (!validation.success) {
    return { error: flattenZodErrors(validation.error) };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: process.env.NEXT_PUBLIC_EMAIL as string,
      subject: "Message from contact form",
      reply_to: validation.data.senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: validation.data.message,
        senderEmail: validation.data.senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
