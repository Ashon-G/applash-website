"use client";
import React from "react";
import { Container } from "./container";
import { IconCheck } from "@tabler/icons-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import Balancer from "react-wrap-balancer";
import Beam from "./beam";
import { Clients } from "./clients";

export const PricingGrid = () => {
  const tiers = [
    {
      title: "Start",
      description: "Try Applash with your first conversion",
      priceText: "$0 to start",
      features: [
        "Convert one web app to mobile",
        "No credit card required",
        "Community support",
      ],
      href: "https://applash.online",
      ctaText: "Get Started",
    },
    {
      title: "Per Build",
      description: "Only pay when you need a new release",
      priceText: "$99 per build",
      features: [
        "Everything in Start +",
        "Push notifications",
        "App Store and Play Store builds",
        "Priority support",
        "99.9% uptime SLA",
      ],
      href: "https://applash.online",
      ctaText: "Get Started",
    },
    {
      title: "Unlimited",
      description: "Ship mobile updates whenever you need",
      priceText: "$599/mo for unlimited builds",
      features: [
        "Everything in Per Build +",
        "Advanced analytics",
        "Unlimited push notifications",
        "24/7 customer support",
        "Enhanced security",
      ],
      featured: true,
      href: "https://applash.online",
      ctaText: "Get Started",
    },
    {
      title: "Agencies",
      description: "Dedicated support and pricing for agency partners",
      priceText: "Special pricing",
      features: [
        "Everything in Unlimited +",
        "Custom integrations",
        "Dedicated account manager",
        "SLA & compliance support",
        "Contact us for agency pricing",
      ],
      href: "https://applash.online",
      ctaText: "Contact us",
    },
  ];
  return (
    <div>
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4 py-20">
        {tiers.map((tier, index) => (
          <div
            key={tier.title + index}
            className={cn(
              "flex flex-col justify-between items-start px-6 py-4 rounded-lg relative overflow-hidden",
              tier.featured &&
                "bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-neutral-900 to-neutral-950"
            )}
          >
            {tier.featured && <Beam showBeam className="top-0 block" />}
            <div>
              <h3 className="text-base font-normal">{tier.title}</h3>
              <p className="text-lg text-neutral-400 mt-4 font-medium">{tier.priceText}</p>
              <p className="text-sm text-neutral-4000 mt-4">
                {tier.description}
              </p>
              <div className="mt-4">
                {tier.features.map((feature, idx) => (
                  <Step key={`feature-${index}-${idx}`}>{feature}</Step>
                ))}
              </div>
            </div>
            <Button
              variant={tier.featured ? "primary" : "muted"}
              as="a"
              href={tier.href}
              className="mt-4"
            >
              {tier.ctaText}
            </Button>
          </div>
        ))}
      </Container>
      <Clients />
    </div>
  );
};

const Step = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-2 items-start my-4">
      <IconCheck className="h-4 w-4 text-neutral-300 mt-0.5" />
      <div className="text-sm text-neutral-400">
        <Balancer>{children}</Balancer>
      </div>
    </div>
  );
};
