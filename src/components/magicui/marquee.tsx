import { cn } from "@/lib/utils";
import React from "react";

export const Marquee = ({
  children,
  reverse,
  pauseOnHover = false,
  className,
  ...props
}: {
  children: React.ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "group flex w-full overflow-hidden [--gap:1rem] relative",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[--gap] py-4",
          "animate-[marquee_40s_linear_infinite]",
          reverse && "animate-[marquee_40s_linear_infinite_reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[--gap] py-4",
          "animate-[marquee_40s_linear_infinite]",
          reverse && "animate-[marquee_40s_linear_infinite_reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
    </div>
  );
}; 