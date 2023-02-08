import { ButtonHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ghost?: boolean;
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ 
  ghost, 
  asChild, 
  children, 
  ...props 
}: ButtonProps) {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      {...props}
      className={`
        pointer 
        w-full h-11
        flex items-center justify-center gap-2
        ${!ghost ?
          "bg-background text-primary" :
          "border-ghost-500 border-2 text-primary transition delay-75"
        }
        px-4 
        rounded-md text-sm
        hover:brightness-90
      `}>
      {children}
    </Component>
  );
}