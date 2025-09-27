"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";
import Image from "next/image";

interface Item {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  time: string;
}

let notifications = [
  {
    name: "Payment received",
    description: "$100 Added to account",
    time: "15m ago",
    imageSrc: "/images/vatas/square-blue.png",
    imageAlt: "Blue square notification icon",
  },
  {
    name: "User signed up",
    description: "Magic UI",
    time: "10m ago",
    imageSrc: "/images/vatas/square-red.png",
    imageAlt: "Red square notification icon",
  },
  {
    name: "New message",
    description: "Magic UI",
    time: "5m ago",
    imageSrc: "/images/vatas/square-blue.png",
    imageAlt: "Blue square notification icon",
  },
  {
    name: "New event",
    description: "Magic UI",
    time: "2m ago",
    imageSrc: "/images/vatas/square-red.png",
    imageAlt: "Red square notification icon",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, imageSrc, imageAlt, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="relative flex size-10 items-center justify-center overflow-hidden rounded-2xl bg-white/10">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={40}
            height={40}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
