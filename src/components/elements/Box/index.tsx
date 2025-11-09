import { ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
}

export function Box({ children }: BoxProps) {
  return (
    <div className="w-full max-w-[90%] lg:max-w-[80%] mx-auto px-9 lg:px-0">
      {children}
    </div>
  );
}
