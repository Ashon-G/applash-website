import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { Button } from "./button";
import { Grid } from "./features/grid";
import { FeatureIconContainer } from "./features/feature-icon-container";
import { IconMailFilled } from "@tabler/icons-react";

export const ContactForm = () => {
  return (
    <Container className="py-40 md:py-60 grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
      <div>
        <div className="flex">
          <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
            <IconMailFilled className="h-6 w-6 text-cyan-500" />
          </FeatureIconContainer>
        </div>
        <Heading className="text-left">Contact us</Heading>
        <Subheading className="text-left text-neutral-400">
          Tell us about your buyers and we&apos;ll show you how vatas hunt, qualify, and close the leads you want on autopilot.
        </Subheading>

        <div className="text-sm mt-10">
          <p className="text-sm text-neutral-200">Email</p>
          <p className="text-sm text-neutral-400">hello@vatas.ai</p>
        </div>
        <div className="text-sm mt-4">
          <p className="text-sm text-neutral-200">Phone</p>
          <p className="text-sm text-neutral-400">+1 (305) 555-0132</p>
        </div>
        <div className="text-sm mt-4">
          <p className="text-sm text-neutral-200">Support</p>
          <p className="text-sm text-neutral-400">support@vatas.ai</p>
        </div>
      </div>
      <div className="flex flex-col items-start gap-4 max-w-2xl w-full mx-auto bg-gradient-to-b from-neutral-900 to-neutral-950 p-10 rounded-3xl relative overflow-hidden">
        <Grid size={20} />
        <div className="mb-4 w-full relative z-20">
          <label
            className="text-neutral-300 text-sm font-medium mb-2 inline-block"
            htmlFor="name"
          >
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Manu Arora"
            className="h-10 pl-4 w-full rounded-md text-sm bg-charcoal border border-neutral-800 text-white placeholder-neutral-500 outline-none focus:outline-none active:outline-none focus:ring-2 focus:ring-neutral-800"
          />
        </div>
        <div className="mb-4 w-full relative z-20">
          <label
            className="text-neutral-300 text-sm font-medium mb-2 inline-block"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@company.com"
            className="h-10 pl-4 w-full rounded-md text-sm bg-charcoal border border-neutral-800 text-white placeholder-neutral-500 outline-none focus:outline-none active:outline-none focus:ring-2 focus:ring-neutral-800"
          />
        </div>
        <div className="mb-4 w-full relative z-20">
          <label
            className="text-neutral-300 text-sm font-medium mb-2 inline-block"
            htmlFor="company"
          >
            Company
          </label>
          <input
            id="company"
            type="text"
            placeholder="Your company"
            className="h-10 pl-4 w-full rounded-md text-sm bg-charcoal border border-neutral-800 text-white placeholder-neutral-500 outline-none focus:outline-none active:outline-none focus:ring-2 focus:ring-neutral-800"
          />
        </div>
        <div className="mb-4 w-full relative z-20">
          <label
            className="text-neutral-300 text-sm font-medium mb-2 inline-block"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Type your message here"
            className="pl-4 pt-4 w-full rounded-md text-sm bg-charcoal border border-neutral-800 text-white placeholder-neutral-500 outline-none focus:outline-none active:outline-none focus:ring-2 focus:ring-neutral-800"
          />
        </div>
        <Button variant="muted">Submit</Button>
      </div>
    </Container>
  );
};
