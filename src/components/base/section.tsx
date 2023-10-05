import Header from "@/components/base/header";
import { Separator } from "@/components/ui/separator";
import React, { ReactNode } from "react";

type sectionProps = {
  title: string;
  children: ReactNode;
};

const Section: React.FC<sectionProps> = ({ title, children }) => {
  return (
    <section className="flex flex-col items-center justify-center bg-gradient-to-r from-white to-gray-200 w-full py-16 dark:from-black dark:to-gray-800 min-w-screen-sm">
      {/* <section className="bg-gray-900 w-full mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"> */}
      <Header title={title} />
      {children}
    </section>
  );
};

export default Section;
