import React, { HTMLAttributes, memo } from "react";
import { cn } from "@/utils";
import BannerContent from "@/components/molecules/banner-content";
import Card from "@/components/molecules/card";
import Link from "@/components/atoms/link";

type BannerProps = HTMLAttributes<HTMLDivElement> & {};

const Banner = ({ className, ...props }: BannerProps) => {
  return (
    <div
      className={cn(
        "max-w-screen-3xl mx-auto mt-48 min-h-[625px] flex items-start",
        className,
      )}
      {...props}
    >
      <div className="w-96">
        <p className={"w-1/2"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          aspernatur cum dicta dolore dolores, libero.
        </p>
      </div>
      <BannerContent />
      <div className={"w-60 flex self-end"}>
        <Link href={"/intgrate"}>
          <Card
            title={"IntGrate App"}
            image={"/app.jpg"}
            description={"manage your funds"}
          />
        </Link>
      </div>
    </div>
  );
};

export default memo(Banner);
