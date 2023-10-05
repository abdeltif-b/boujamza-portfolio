"use client";
import React from "react";
import { skillsData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import Section from "@/components/base/section";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="font-extrabold text-2xl dark:text-white">
      Portfolio<span className="text-blue-500">/&gt;</span>
    </div>
  );
};
export default function MenuBar() {
  return (
    <div className="bg-white fixed top-0 w-full shadow-gray-800 bg-opacity-80 backdrop-blur-[0.5rem] dark:bg-black dark:shadow-gray-800">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="#home" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#about" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#projects" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Projects</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#skills" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Skills</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#experience" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Experience</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          {/* <div className="md:hidden flex items-center">
            <button className="text-gray-800 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div> */}
        </div>
      </nav>
    </div>
  );
}
