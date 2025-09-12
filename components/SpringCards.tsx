"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { MotionConfig, motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export const SpringCards = () => {
  return (
    <section className="bg-background px-8 py-24">
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
        <Card
          title="Instant Builds"
          subtitle="Drop in a URL and watch Applash craft a native app in moments."
          className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white"
        />
        <Card
          title="Native Power"
          subtitle="Tap into camera, push and offline storage without touching Swift or Kotlin."
          className="bg-gradient-to-bl from-violet-600 to-indigo-600 text-white sm:-translate-y-6"
        />
        <Card
          title="Live Sync"
          subtitle="Ship web updates that appear on phones the second you deploy."
          className="bg-gradient-to-tr from-violet-600 to-indigo-600 text-white"
        />
        <Card
          title="Store Ready"
          subtitle="Generate icons, signing and screenshots for iOS and Android in one click."
          className="bg-gradient-to-tl from-violet-600 to-indigo-600 text-white sm:-translate-y-6"
        />
      </div>
    </section>
  );
};

const Card = ({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle: string;
  className?: string;
}) => {
  return (
    <MotionConfig
      transition={{
        type: "spring",
        bounce: 0.5,
      }}
    >
      <motion.div
        whileHover="hovered"
        className={twMerge(
          "group w-full border-2 border-violet-700",
          className
        )}
      >
        <motion.div
          initial={{
            x: 0,
            y: 0,
          }}
          variants={{
            hovered: {
              x: -8,
              y: -8,
            },
          }}
          className={twMerge(
            "-m-0.5 border-2 border-violet-700",
            className
          )}
        >
          <motion.div
            initial={{
              x: 0,
              y: 0,
            }}
            variants={{
              hovered: {
                x: -8,
                y: -8,
              },
            }}
            className={twMerge(
              "relative -m-0.5 flex h-72 flex-col justify-between overflow-hidden border-2 border-violet-700 p-8",
              className
            )}
          >
            <p className="flex items-center text-2xl font-medium uppercase">
              <FiArrowRight className="-ml-8 mr-2 opacity-0 transition-all duration-300 ease-in-out group-hover:ml-0 group-hover:opacity-100" />
              {title}
            </p>
            <div>
              <p className="transition-[margin] duration-300 ease-in-out group-hover:mb-10">
                {subtitle}
              </p>
              <button className="absolute bottom-2 left-2 right-2 translate-y-full border-2 border-violet-700 bg-white px-4 py-2 text-violet-700 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                EXPLORE
              </button>
            </div>

            <motion.svg
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
              style={{
                top: "0",
                right: "0",
                x: "50%",
                y: "-50%",
                scale: 0.75,
              }}
              width="200"
              height="200"
              className="pointer-events-none absolute z-10 rounded-full"
            >
              <path
                id="circlePath"
                d="M100,100 m-100,0 a100,100 0 1,0 200,0 a100,100 0 1,0 -200,0"
                fill="none"
              />
              <text>
                <textPath
                  href="#circlePath"
                  fill="white"
                  className="fill-white text-2xl font-black uppercase opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                >
                  APPLASH • APPLASH • APPLASH • APPLASH •
                </textPath>
              </text>
            </motion.svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
};