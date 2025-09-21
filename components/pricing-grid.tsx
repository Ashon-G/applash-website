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
      title: "Pay for Results",
      description: "Only pay when a vata closes a qualified opportunity",
      priceText: "$50 per qualified lead",
      features: [
        "No platform fees or retainers",
        "Verified buyer identity, intent, and contact info",
        "Inbox visibility for every outreach and escalation",
        "Knowledge hub training included",
      ],
      href: "/contact",
      ctaText: "Talk to sales",
    },
    {
      title: "Growth Subscription",
      description: "Predictable pricing for teams closing 20+ new deals monthly",
      priceText: "$399/month",
      features: [
        "Includes the first 20 qualified leads each month",
        "$45 per additional lead after your included quota",
        "Dedicated revenue strategist and weekly playbook reviews",
        "Pipeline analytics, CRM syncs, and SLA monitoring",
      ],
      featured: true,
      href: "/contact",
      ctaText: "Start subscription",
    },
    {
      title: "Enterprise Revenue Desk",
      description: "Custom automations, routing, and compliance for large teams",
      priceText: "Custom pricing",
      features: [
        "Multi-brand knowledge hubs and territory controls",
        "Advanced governance with audit trails and permissions",
        "Private Slack or Teams channel with revenue engineers",
        "Volume pricing and procurement-friendly contracts",
      ],
      href: "/contact",
      ctaText: "Design your plan",
    },
    {
      title: "Partner Program",
      description: "For agencies and consultants who want to resell vatas",
      priceText: "Apply to join",
      features: [
        "Revenue share on every lead closed",
        "Co-branded onboarding assets and sandboxes",
        "Shared inbox permissions across client workspaces",
        "Partner-only reporting and quarterly roadmap previews",
      ],
      href: "/contact",
      ctaText: "Apply now",
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
