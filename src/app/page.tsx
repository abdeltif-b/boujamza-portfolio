import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Skills from "@/components/skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-center bg-gradient-to-r from-white to-gray-100  dark:from-black dark:to-gray-700">
      {/* <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-r from-white to-gray-100"> */}
      <Intro />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
