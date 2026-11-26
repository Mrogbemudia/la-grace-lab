import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "outline" | "ghost" };

const variants = {
  primary: "bg-primary text-primary-foreground hover:opacity-90",
  outline: "border border-primary text-primary bg-background hover:bg-tint",
  ghost: "text-foreground hover:bg-tint",
};

export const Button = React.forwardRef<HTMLButtonElement, Props>(function Button(
  { className, variant = "primary", ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded px-4 text-sm font-semibold transition disabled:opacity-60",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
});
