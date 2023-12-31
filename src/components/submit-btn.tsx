import { Button } from "@/components/ui/button";
import React from "react";
// @ts-expect-error
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      Submit
    </Button>
  );
}
