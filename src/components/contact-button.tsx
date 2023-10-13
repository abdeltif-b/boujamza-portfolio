"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { handleScroll } from "@/lib/utils";

export default function ContactButton() {
  return (
    <Button asChild>
      <Link href="#contact" onClick={(e) => handleScroll(e, "contact")}>
        Contact me
      </Link>
    </Button>
  );
}
