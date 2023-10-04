"use client";

import React from "react";
import { experiencesData } from "@/lib/data";
import { BoxIcon, CalendarIcon, DotIcon } from "@radix-ui/react-icons";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/base/header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Experience() {
  return (
    <section id="experience" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <Header title="My experience" />
      {experiencesData.map((item, index) => (
        <Card key={index} className="w-full">
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.date}</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>{item.mission}</AccordionTrigger>
                <AccordionContent>
                  {item.description.split("- ").map((item, index) => (
                    <>
                      {index ? <Separator /> : null}
                      <div key={index}>{item}</div>
                    </>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
          <CardFooter>
            <p className="text-sm italic text-gray-600 ">{item.skills.join(", ")}</p>
          </CardFooter>
        </Card>
      ))}

      {/* <VerticalTimeline lineColor="">
        
      </VerticalTimeline> */}
    </section>
  );
}
