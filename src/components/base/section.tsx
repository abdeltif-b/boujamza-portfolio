import Header from "@/components/base/header";
import React, { ReactNode } from "react";

type sectionProps = {
  title: string;
  children: ReactNode;
};

const Section: React.FC<sectionProps> = ({ title, children }) => {
  return (
    <section className="flex flex-col items-center justify-center bg-gradient-to-r from-white to-gray-200 w-full py-16 dark:from-black dark:to-gray-800 mx-10">
      <Header title={title} />
      {children}
    </section>
  );
};

export default Section;
