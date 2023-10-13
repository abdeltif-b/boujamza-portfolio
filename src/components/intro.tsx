import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileTextIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import ContactButton from "@/components/contact-button";

export default function Intro() {
  const diffYears: number = Math.floor(
    (new Date().getTime() - new Date(2018, 7, 1).getTime()) / (1000 * 60 * 60 * 24 * 365.25)
  );

  return (
    <section id="home" className="text-center pt-16 pb-6 mx-10">
      <div className="flex flex-col items-center justify-center gap-5 pt-10">
        <Image
          src="/img/pic.jpeg"
          alt="image"
          width="200"
          height="200"
          quality="100"
          priority={true}
          className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
        />
        <div>
          <h1 className="text-5xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
            Hello,{" "}
            <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
              I&#39;m Boujamza Abdeltif.
            </span>
          </h1>
          <div className="text-lg font-normal text-gray-700 dark:text-gray-300 pt-5">
            <p>I&#39;m a full-stack developer with +{diffYears} years of experience. I enjoy building web apps.</p>
            <p>My focus is Next.js (React / Typescript / Node.js) & FastAPI (Python).</p>
            <p>I&#39;m highly enthusiastic about AI and machine learning technologies.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
          <ContactButton />
          <Button variant="secondary" asChild>
            <Link href="pdfs/cv (en).pdf" target="_blank">
              <FileTextIcon className="mr-2 h-4 w-4" />
              Download CV
            </Link>
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link href={`${process.env.NEXT_PUBLIC_LINKEDIN}`} target="_blank">
                <LinkedInLogoIcon />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={`${process.env.NEXT_PUBLIC_GITHUB}`} target="_blank">
                <GitHubLogoIcon />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
