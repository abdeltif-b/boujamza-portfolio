import Header from "@/components/base/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { projectsData } from "@/lib/data";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="text-center mx-10 mb-10">
      <Separator className="my-6" />
      <Header title={"Projects"} />
      <div className="text-gray-700 dark:text-gray-300 mt-5">
        This section showcases a selection of personal projects I&#39;ve undertaken during my free time, driven by a
        passion for exploration and experimentation with new technologies.
      </div>
      <div className="font-bold text-gray-700 dark:text-gray-300">
        For a glimpse of my professional projects, please refer to the <b>My experience</b> section
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-10">
        {projectsData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-center flex-col gap-4 bg-gray-800 dark:bg-gray-100 p-4 shadow rounded h-full lg:h-[490px]"
            >
              <div className="font-bold text-lg text-white dark:text-black">
                {item.title}

                <Separator className="sticky border-y-2" />
              </div>
              <Image
                src={item.cover}
                alt={item.title}
                width="500"
                height="200"
                quality="100"
                priority={false}
                className="cover object-cover border-[0.35rem] border-white shadow-xl hover:scale-105 h-200 "
              />
              <div className="text-sm text-gray-200 dark:text-gray-700">{item.description}</div>
              <div className="flex-grow"></div>
              {/* Push buttons to the bottom */}
              <div className="flex flex-wrap gap-1">
                {item.tags.map((tag, idx) => (
                  <Badge key={idx}>{tag}</Badge>
                ))}
              </div>
              <div className="flex gap-1">
                <Button variant={"secondary"} asChild>
                  <Link href={item.demo} target="_blank">
                    <ExternalLinkIcon className="mr-2 h-4 w-4" /> Demo
                  </Link>
                </Button>
                <Button variant={"secondary"} asChild>
                  <Link href={item.github} target="_blank">
                    <GitHubLogoIcon />
                  </Link>
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
