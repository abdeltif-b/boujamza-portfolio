import React from "react";
import { skillsData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import Section from "@/components/base/section";

export default function Skills() {
  return (
    <Section title="My skills">
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 max-w-screen-md mt-10">
        {skillsData.map((skill, index) => (
          <Badge key={index}>{skill}</Badge>
        ))}
      </ul>
    </Section>
  );
}
