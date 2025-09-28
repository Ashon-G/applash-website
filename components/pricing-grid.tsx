"use client";
import React from "react";
import { Container } from "./container";
import { IconCheck } from "@tabler/icons-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import Balancer from "react-wrap-balancer";
import Beam from "./beam";
import { Clients } from "./clients";
import { PopupButton } from "@typeform/embed-react";
import {
  TYPEFORM_CONTACT_FORM_ID,
  TYPEFORM_CTA_MEDIUM,
} from "@/constants/typeform";

export const PricingGrid = () => {
  const tiers = [
    {
      title: "Pay for Results",
      description: "You pay only when a vata delivers a qualified lead",
      priceText: "$50 per qualified lead",
      features: [
        "No platform fees or retainers",
        "Verified buyer identity, intent, and contact info",
        "Full inbox visibility for every outreach and escalation",
        "Knowledge hub setup included",
      ],
      ctaText: "Talk to sales",
    },
    {
      title: "Growth Subscription",
      description: "Flat rate once you consistently close twenty qualified deals a month",
      priceText: "$399/month",
      features: [
        "Includes the first 20 qualified leads each month",
        "$45 per additional lead after your included quota",
        "Weekly check-ins with a revenue strategist",
        "Pipeline analytics, CRM syncs, and SLA monitoring",
      ],
      featured: true,
      ctaText: "Start subscription",
    },
    {
      title: "Enterprise Revenue Desk",
      description: "Custom automations, routing, and compliance for larger teams",
      priceText: "Custom pricing",
      features: [
        "Multi-brand knowledge hubs and territory controls",
        "Advanced governance with audit trails and permissions",
        "Private Slack or Teams channel with revenue engineers",
        "Volume pricing and procurement-friendly contracts",
      ],
      ctaText: "Design your plan",
    },
    {
      title: "Partner Program",
      description: "For agencies and consultants who resell vatas to their clients",
      priceText: "Apply to join",
      features: [
        "Revenue share on every lead closed",
        "Co-branded onboarding assets and sandboxes",
        "Shared inbox permissions across client workspaces",
        "Partner-only reporting and quarterly roadmap previews",
      ],
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
              as={PopupButton}
              id={TYPEFORM_CONTACT_FORM_ID}
              data-tf-medium={`${TYPEFORM_CTA_MEDIUM}-pricing-${index}`}
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
