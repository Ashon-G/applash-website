"use client";
import { motion, useMotionValueEvent } from "motion/react";
import React, { useRef, useState } from "react";
import { FeatureIconContainer } from "./features/feature-icon-container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { StickyScroll } from "./ui/sticky-scroll";
import {
  IconMailForward,
  IconSocial,
  IconTerminal,
  IconTool,
} from "@tabler/icons-react";
import { useScroll } from "motion/react";
import { BlurImage } from "./blur-image";

export const Tools = () => {
  const content = [
    {
      icon: <IconSocial className="h-8 w-8 text-secondary" />,
      title: "Connect your social graph",
      description:
        "Authorize LinkedIn, Reddit, X, Slack, and email so vatas surface warm conversations automatically.",
      content: (
        <ImageContainer>
          <BlurImage
            src="/first.png"
            alt="dashboard"
            height="1000"
            width="1000"
            className="w-full rounded-lg shadow-xl shadow-brand/[0.2]"
          />
        </ImageContainer>
      ),
    },
    {
      icon: <IconMailForward className="h-8 w-8 text-secondary" />,
      title: "Live inbox oversight",
      description:
        "Review outreach, approve replies, and jump in the moment a vata needs you.",
      content: (
        <ImageContainer>
          <BlurImage
            src="/second.png"
            alt="dashboard"
            height="1000"
            width="1000"
            className="w-full rounded-lg shadow-xl shadow-brand/[0.2]"
          />
        </ImageContainer>
      ),
    },
    {
      icon: <IconTerminal className="h-8 w-8 text-secondary" />,
      title: "Knowledge hub sync",
      description:
        "Feed recordings, docs, and analytics so vatas learn your product, objections, and differentiators.",
      content: (
        <ImageContainer>
          <BlurImage
            src="/fourth-backup.png"
            alt="dashboard"
            height="1000"
            width="1000"
            className="w-full rounded-lg shadow-xl shadow-brand/[0.2]"
          />
        </ImageContainer>
      ),
    },
    {
      icon: <IconTool className="h-8 w-8 text-secondary" />,
      title: "Revenue analytics",
      description:
        "Track sourced pipeline, win rates, and response speed across every vata from one dashboard.",
      content: (
        <ImageContainer>
          <BlurImage
            src="/third.png"
            alt="dashboard"
            height="1000"
            width="1000"
            className="w-full rounded-lg shadow-xl shadow-brand/[0.2]"
          />
        </ImageContainer>
      ),
    },
  ];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgrounds = [
    "var(--charcoal)",
    "var(--neutral-900)",
    "var(--gray-900)",
  ];
  const index = Math.round(scrollYProgress.get() * (backgrounds.length - 1));

  const [gradient, setGradient] = useState(backgrounds[0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / content.length);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setGradient(backgrounds[closestBreakpointIndex % backgrounds.length]);
  });
  return (
    <motion.div
      animate={{
        background: gradient,
      }}
      transition={{
        duration: 0.5,
      }}
      ref={ref}
      className="w-full relative h-full pt-20 md:pt-40"
    >
      <div className="px-6">
        <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
          <IconTool className="h-6 w-6 text-cyan-500" />
        </FeatureIconContainer>
        <Heading className="mt-4">Every workflow in one revenue command center</Heading>
        <Subheading>
          Launch vatas, train them once, stay in the inbox, and track pipeline impact without juggling tools.
        </Subheading>
      </div>
      <StickyScroll content={content} />
    </motion.div>
  );
};

const ImageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg relative shadow-2xl">
      {children}
      <div className="absolute bottom-0 w-full h-px inset-x-0 bg-gradient-to-r from-transparent via-secondary to-transparent" />
      <div className="absolute bottom-0 w-40 mx-auto h-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </div>
  );
};
