"use client";

import React, { memo, useRef } from "react";
import { IDropdownItem } from "@/lib/models/IDropdownItem";
import Link from "@/components/atoms/link";
import { BiChevronDown } from "react-icons/bi";
import { cn } from "@/utils";
import useOutsideClick from "@/hooks/use-outside-click";
import { motion } from "framer-motion";

type DropdownProps = {
  items: IDropdownItem[];
  defaultItem?: IDropdownItem;
  dropdownClassName?: string;
  onTrigger?: () => void;
};

const animation = {
  initial: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
  },
};

const Dropdown = ({ items, dropdownClassName, onTrigger }: DropdownProps) => {
  const [open, setOpen] = React.useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => {
    if (open) {
      setOpen(false);
    }
  });

  const onOpen = () => {
    setOpen((old) => !old);
    onTrigger?.();
  };

  return (
    <div className={"flex flex-col relative"} ref={ref}>
      <Link className={"cursor-pointer"} onClick={onOpen}>
        <div className="flex items-center">
          <span>En</span> <BiChevronDown />
        </div>
      </Link>
      <motion.div
        variants={animation}
        initial={"initial"}
        exit={"hidden"}
        animate={open ? "show" : "hidden"}
        className={cn(
          "flex flex-col absolute w-36 max-w-80 bg-slate-200 right-0 top-8 z-20",
          dropdownClassName,
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        {items.map((item) => (
          <Link
            key={item.label}
            href={item?.href}
            className={
              "cursor-pointer whitespace-nowrap p-2 border-gray-100 border-b last:border-b-0"
            }
          >
            {item.label}
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default memo(Dropdown);
