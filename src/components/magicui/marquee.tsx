import { cn } from "@/lib/utils";
import React from "react";

export const Marquee = ({
  children,
  reverse,
  pauseOnHover = false,
  className,
}: {
  children: React.ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "animate-scroll flex min-w-full flex-shrink-0 items-center justify-around gap-4 py-4",
          reverse && "animate-scroll-reverse",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "animate-scroll flex min-w-full flex-shrink-0 items-center justify-around gap-4 py-4",
          reverse && "animate-scroll-reverse",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
    </div>
  );
}; 