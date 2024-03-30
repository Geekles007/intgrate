import React, { AnchorHTMLAttributes, memo } from "react";
import { cn } from "@/utils";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {};

const Link = ({ className, children, ...props }: LinkProps) => {
  return (
    <a className={cn("", className)} {...props}>
      {children}
    </a>
  );
};

export default memo(Link);
