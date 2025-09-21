"use client";
import React, { useRef } from "react";
import { MotionValue, motion, useScroll, useTransform } from "motion/react";
import { Button } from "./button";
import { HiArrowRight } from "react-icons/hi2";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { FeaturedImages } from "./featured-images";
import Beam from "./beam";
import { SplineHeroModel } from "./spline-hero-model";
import { ArcadeEmbed } from "./arcade";
export const Hero = () => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1.2];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.5], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, 100]);
  return (
    <div
      ref={containerRef}
      className="flex flex-col min-h-[70rem] md:min-h-[100rem] pt-20 md:pt-40 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <SplineHeroModel />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/40 to-charcoal/90" />
      </div>
      <Container className="relative z-10 flex flex-col items-center justify-center">
        <Heading
          as="h1"
          className="text-4xl md:text-4xl lg:text-8xl font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10  py-6"
        >
          Unleash an AI sales force that never sleeps
        </Heading>
        <Subheading className="text-center mt-2 md:mt-6 text-base md:text-xl text-muted dark:text-muted-dark max-w-3xl mx-auto relative z-10">
          Vatas crawls LinkedIn, Reddit, and every social community to uncover buyers, qualify intent, and close deals 24/7.
          Connect your social accounts, analytics, and knowledge hub so each vata sells with your voice and stores every answer for the next conversation.
        </Subheading>
        <FeaturedImages
          textClassName="lg:text-left text-center"
          className="lg:justify-start justify-center items-center"
          showStars
        />
        <div className="flex items-center gap-4 justify-center my-10 relative z-10">
          <Button
            className="flex space-x-2 items-center group !text-lg"
            as="a"
            href="/contact"
          >
            <span>Launch your vata</span>{" "}
            <HiArrowRight className="text-black group-hover:translate-x-1 stroke-[1px] h-3 w-3 mt-0.5 transition-transform duration-200" />
          </Button>
        </div>
      </Container>
      <div className="relative z-10 flex flex-col items-center justify-center p-2 md:px-20 md:pt-28 cursor-pointer md:-mt-20">
        <div
          className="w-full relative"
          style={{
            perspective: "1000px",
          }}
        >
          <Card rotate={rotate} translate={translate} scale={scale}>
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <ArcadeEmbed />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        translateY: translate,
        // scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-6xl z-40 group -mt-12 mx-auto isolate group h-[36rem] md:h-[50rem] w-full border-4 border-neutral-900 p-2 md:p-2 bg-charcoal rounded-[30px] shadow-2xl relative"
    >
      <Beam showBeam className="-top-1 block" />
      <div className="absolute h-40 w-full bottom-0 md:-bottom-10 inset-x-0 scale-[1.2] z-20 pointer-events-none bg-charcoal [mask-image:linear-gradient(to_top,white_30%,transparent)]" />
      <div className=" h-full w-full  overflow-hidden rounded-2xl bg-transparent md:rounded-2xl md:p-4 ">
        {children}
      </div>
    </motion.div>
  );
};
