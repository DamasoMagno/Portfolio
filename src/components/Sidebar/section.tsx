import { FC, HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  title: string;
  children: ReactNode;
}

export const Section: FC<SectionProps> = 
  ({ title, children }) => (
    <div className="bg-section rounded-2xl px-5 py-7 shadow-section">
      <header>
        <h3 className="text-primary text-xl mb-4">{title}</h3>
      </header>

      {children}
    </div>
  );
