import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ZodError } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};

// Function to flatten Zod errors into a single string
export function flattenZodErrors(errors: ZodError, path = ""): string {
  const errorMessages: string[] = [];

  errors.errors.forEach((error) => {
    const fullPath = path ? `${path}.${error.path.join(".")}` : error.path.join(".");
    if (error.message) {
      errorMessages.push(`Field "${fullPath}": ${error.message}`);
    }
    // if (error.type === 'object') {
    //   const nestedErrors = flattenZodErrors(error, fullPath);
    //   if (nestedErrors) {
    //     errorMessages.push(nestedErrors);
    //   }
    // }
  });

  return errorMessages.join("\n");
}

export const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
