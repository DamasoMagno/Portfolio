import { ButtonHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ghost?: boolean;
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ ghost, asChild, children, ...props }: ButtonProps) {
  const Button = asChild ? Slot : 'button';

  return (
    <Button
      {...props}
      type="button"
      className={`
        pointer 
        w-full
        flex items-center justify-center gap-2
        ${!ghost ?
          "bg-background text-primary" :
          "border-ghost-500 border-2 text-primary transition delay-75"
        }
        px-4 py-2
        rounded-md text-sm
      `}>
      {children}
    </Button>
  );
}