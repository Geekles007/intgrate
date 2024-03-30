import React, { memo } from "react";
import Button from "@/components/atoms/button";
import Image from "next/image";

interface BannerContentProps {}

const BannerContent = ({}: BannerContentProps) => {
  return (
    <div className={"flex flex-col flex-1 space-y-12"}>
      <h1 className={"text-9xl w-3/5 -ml-2.5 -mt-4"}>Property Funds</h1>
      <div className="flex items-center gap-4">
        <Button className={"bg-teal-500 text-white"}>Contact Us</Button>
        <Button
          className={
            "flex justify-end hover:bg-teal-500 hover:text-white transition duration-300"
          }
        >
          <Image
            src={"/profile.png"}
            alt={"profile"}
            width={85}
            height={80}
            className={"absolute bottom-0 -left-4"}
          />
          <p className={"w-3/5 text-xs"}>Get a free consultation</p>
        </Button>
      </div>
    </div>
  );
};

export default memo(BannerContent);
