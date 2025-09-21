import React from "react";
import { GradientContainer } from "../gradient-container";
import { Container } from "../container";
import { Heading } from "../heading";
import { Subheading } from "../subheading";
import { FeatureIconContainer } from "./feature-icon-container";
import { FaBolt } from "react-icons/fa";
import { Iphone15Pro } from "@/registry/magicui/iphone-15-pro";

export function Iphone15ProDemo() {
  return (
    <div className="relative max-w-2xl mx-auto">
      <Iphone15Pro
        className="size-full"
        videoSrc="https://videos.pexels.com/video-files/8946986/8946986-uhd_1440_2732_25fps.mp4"
      />
    </div>
  );
}

export const Features = () => {
  return (
    <GradientContainer className="md:my-20">
      <Container className="py-20 max-w-5xl mx-auto  relative z-40">
        <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
          <FaBolt className="h-6 w-6 text-cyan-500" />
        </FeatureIconContainer>
        <Heading className="pt-4">Launch mobile apps from your web app</Heading>
        <Subheading>
          Applash includes everything you need to convert your existing web application into polished iOS and Android apps.
        </Subheading>

        <div className="py-10">
          <Iphone15ProDemo />
        </div>
      </Container>
    </GradientContainer>
  );
};
