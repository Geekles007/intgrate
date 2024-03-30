import React, { HTMLAttributes, memo } from "react";
import { cn } from "@/utils";
import Link from "@/components/atoms/link";
import Image from "next/image";
import Dropdown from "@/components/molecules/dropdown";

type MainHeaderProps = HTMLAttributes<HTMLDivElement> & {};

const MainHeader = ({ className, children, ...props }: MainHeaderProps) => {
  const links = [
    {
      href: "/about-us",
      label: "About us",
    },
    {
      href: "/investments",
      label: "Investments",
    },
    {
      href: "/career",
      label: "Career",
    },
  ];

  return (
    <div
      className={cn(
        "sticky top-10 mx-auto z-10 max-w-screen-3xl flex items-center",
        className,
      )}
      {...props}
    >
      <Link href={"/"} className={"w-96"}>
        <Image
          width={110}
          height={40}
          src={"/logo.png"}
          alt="vogue logo"
          className={"object-contain"}
        />
      </Link>
      <div className="flex items-center gap-12 flex-1">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-6">
        <Dropdown
          items={[
            { href: "/item-1", label: "item 1" },
            { href: "/item-2", label: "item 2" },
          ]}
        />
        <Link href={"/get-app"} className={"uppercase underline"}>
          get our app
        </Link>
      </div>
    </div>
  );
};

export default memo(MainHeader);
