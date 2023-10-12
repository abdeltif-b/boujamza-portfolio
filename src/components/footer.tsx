import React from "react";

const getDate = (): number => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return currentYear;
};

export default async function Footer() {
  const currentYear = await getDate();
  return (
    <footer className="p-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {currentYear} <b>Boujamza/&gt;</b>. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with Next.js & React, TypeScript, Tailwind CSS,
        Shadcn, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
