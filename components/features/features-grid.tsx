import React from "react";
import { Grid } from "./grid";

export const FeaturesGrid = () => {
  const grid = [
    {
      title: "Omnichannel monitoring",
      description:
        "Vatas watch LinkedIn, Reddit, X, Discord, and inboxes to catch buyer signals instantly.",
    },
    {
      title: "Knowledge hub training",
      description:
        "Sync documents, recordings, and analytics so every agent uses fresh messaging.",
    },
    {
      title: "Inbox oversight",
      description:
        "Review, approve, or jump into any conversation from one inbox with full history.",
    },
    {
      title: "Lead verification",
      description:
        "Identity, intent, and fit are verified before a lead hits your CRM.",
    },
    {
      title: "Escalation memory",
      description:
        "Answer once and vatas reuse it, building smarter playbooks automatically.",
    },
    {
      title: "Analytics & CRM syncs",
      description:
        "Pipeline metrics, transcripts, and next steps flow into Salesforce, HubSpot, and more.",
    },
    {
      title: "Partner-ready workspaces",
      description:
        "Give partners branded workspaces with shared hubs and performance dashboards.",
    },
    {
      title: "Enterprise security",
      description:
        "SOC 2 controls, SSO, audit logs, and permissions keep every action traceable.",
    },
  ];
  return (
    <div className="py-20 lg:py-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {grid.map((feature, idx) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
