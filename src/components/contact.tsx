"use client";

import React, { useRef } from "react";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import { toast } from "sonner";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import Section from "@/components/base/section";

export default function Contact() {
  const ref = useRef<HTMLFormElement>(null);
  const email = process.env.NEXT_PUBLIC_EMAIL;

  return (
    <Section title="Contact me" id="contact">
      <Card className="mt-10">
        <form
          ref={ref}
          className="min-w-screen-sm"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error, { duration: Infinity });
              return;
            }
            // reset the form
            ref.current?.reset();

            toast.success("Email sent successfully!");
          }}
        >
          <CardHeader>
            <CardTitle>
              Please contact me at{" "}
              <Link className="underline" href={`mailto:${email}`}>
                {email}
              </Link>{" "}
              or through this form.
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input name="senderEmail" type="email" required maxLength={500} placeholder="Your email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Message</Label>
                <Textarea name="message" placeholder="Your message" required maxLength={5000} />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <SubmitBtn />
          </CardFooter>
        </form>
      </Card>
    </Section>
  );
}
