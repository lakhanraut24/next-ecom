import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  spanClassName?: string;
}

const Logo = ({ className, spanClassName }: Props) => {
  return (
    <Link
      href={"/"}
      className={cn(
        "text-zinc-950 text-xl underline underlin-offset-4 decoration-[1px] group",
        className
      )}
    >
      <span
        className={cn(
          "bg-zinc-950 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-xl font-bold mr-1 group-hover:bg-blue-700",
          spanClassName
        )}
      >
        LR
      </span>
      ecommerce
    </Link>
  );
};

export default Logo;
