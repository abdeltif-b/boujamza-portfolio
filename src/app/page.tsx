import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-center bg-gradient-to-r from-white to-gray-100  dark:from-black dark:to-gray-700">
      <Intro />
      {/* <Projects /> */}
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
