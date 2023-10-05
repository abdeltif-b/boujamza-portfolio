import { Separator } from "@/components/ui/separator";
import React from "react";

type headerProps = {
  title: string;
};

const Header: React.FC<headerProps> = ({ title }) => {
  return (
    <span className="text-xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-200 underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600 pb-2">
      {title}
    </span>
  );
};

export default Header;
