import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(function Input(
  { className, ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      className={cn("min-h-11 w-full rounded border border-input bg-background px-3 text-base focus:outline-none focus:ring-2 focus:ring-primary", className)}
      {...props}
    />
  );
});
