import React from "react";
import { experiencesData } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/base/header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export default async function Experience() {
  return (
    <section id={"experience"} className="flex flex-col items-center justify-center max-w-screen-md py-16 mx-10">
      <Header title={"My experience"} />
      <div className="border-l border-gray-300 h-10"></div>
      {experiencesData.map((item, index) => (
        <React.Fragment key={index}>
          {index ? <div className="border-l border-gray-300 h-10"></div> : null}

          <Card>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>
                {item.location} &#10139; {item.date}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>{item.mission}</AccordionTrigger>
                  <AccordionContent>
                    {item.description.split("- ").map((item, index) => (
                      <React.Fragment key={index}>
                        {index ? <Separator className="my-3" /> : null}
                        <div>{item}</div>
                      </React.Fragment>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
            <CardFooter className="flex flex-col">
              <p className="text-sm italic text-gray-600 dark:text-gray-300">{item.skills.join(", ")}</p>
              <Dialog>
                <DialogTrigger
                  className={buttonVariants({
                    variant: "secondary",
                    className: "w-full mt-3",
                  })}
                >
                  More details
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      <div>{item.title}</div>
                      <div className="text-sm text-gray-500">
                        {item.location} ({item.date})
                      </div>
                    </DialogTitle>
                    <DialogDescription>
                      <ScrollArea className="max-h-[700px] w-2xl rounded-md  p-4 mt-4">
                        <article className="prose dark:prose-invert">
                          <MDXRemote source={item.more} />
                        </article>
                      </ScrollArea>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        </React.Fragment>
      ))}
    </section>
  );
}
