import { Separator } from "@/components/ui/separator";
import React from "react";

type headerProps = {
  title: string;
};

const Header: React.FC<headerProps> = ({ title }) => {
  return (
    <span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">
      {title}
      <Separator />
    </span>
  );
};

export default Header;
