"use client";
import React, { FC } from "react";
import { links } from "@/lib/data";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn, handleScroll } from "@/lib/utils";

type MenuListProps = {
  isVertical?: boolean;
};

const Logo = () => (
  <div className="font-extrabold text-2xl dark:text-white">
    Boujamza<span className="text-blue-500">/&gt;</span>
  </div>
);

const MenuItems: FC<MenuListProps> = ({ isVertical }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList className={cn("flex items-start space-x-0", { "flex-col": isVertical })}>
        {links.map((item) => {
          return (
            <NavigationMenuItem
              key={item.name}
              className="flex items-start"
              onClick={(e) => handleScroll(e, item.hash)}
            >
              <Link legacyBehavior passHref href={item.hash}>
                <NavigationMenuLink
                  className={
                    "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm text-gray-700 dark:text-gray-200 font-bold transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  }
                >
                  {item.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const MenuItemsMobile = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">
        <HamburgerMenuIcon />
      </Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>
      <MenuItems isVertical />
    </SheetContent>
  </Sheet>
);

export default function MenuBar() {
  return (
    <div className="bg-white fixed top-0 w-full shadow-gray-800 bg-opacity-60 backdrop-blur-[0.5rem] dark:bg-black dark:bg-opacity-50 dark:backdrop-blur-[0.5rem]">
      <nav className="container mx-auto px-6 py-2">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="hidden lg:flex items-center space-x-4">
            <MenuItems />
          </div>
          <div className="lg:hidden flex items-center">
            <MenuItemsMobile />
          </div>
        </div>
      </nav>
    </div>
  );
}
