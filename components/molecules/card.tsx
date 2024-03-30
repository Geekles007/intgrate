import React, { HTMLAttributes, memo } from "react";
import { cn } from "@/utils";
import Image from "next/image";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  image?: string;
  title: string;
  description?: string;
};

const Card = ({
  className,
  image,
  title,
  description,
  ...props
}: CardProps) => {
  return (
    <div
      className={cn("flex flex-col gap-5 items-center", className)}
      {...props}
    >
      <div className={"size-60 relative"}>
        {image && (
          <Image
            loading={"lazy"}
            src={image}
            alt={title}
            fill
            className={"w-full h-full object-cover"}
          />
        )}
      </div>
      <div className="flex flex-col items-center w-full">
        <strong className={"font-semibold"}>{title}</strong>
        <p className={"text-gray-500"}>{description}</p>
      </div>
    </div>
  );
};

export default memo(Card);
