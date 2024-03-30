import React, { AnchorHTMLAttributes, memo } from "react";
import { cn } from "@/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {};

const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <a
      className={cn(
        "bg-white text-sm relative flex items-center justify-center overflow-hidden text-black h-14 min-w-40 cursor-pointer",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
};

export default memo(Button);
