"use client";
import React, { useState } from "react";
import Accordion from "./accordion";
import { Heading } from "./heading";

const questions = [
  {
    id: 1,
    title: "What is Vatas?",
    description:
      "Vatas are autonomous AI sellers that monitor your channels, qualify prospects, and pass meetings to your team.",
  },
  {
    id: 2,
    title: "How do vatas find new leads?",
    description:
      "Each vata watches LinkedIn, Reddit, and your inboxes to spot buying signals and book meetings.",
  },
  {
    id: 3,
    title: "What data should I connect?",
    description:
      "Link your social profiles, storage, analytics, and knowledge bases so vatas understand your business and ideal customers.",
  },
  {
    id: 4,
    title: "How do vatas learn our voice?",
    description:
      "Upload assets to the knowledge hub, tag personas, and the vatas adjust outreach with each new conversation.",
  },
  {
    id: 5,
    title: "What happens when a vata gets stuck?",
    description:
      "They ping you in the inbox, store your response, and reuse it next time.",
  },
  {
    id: 6,
    title: "How do I monitor activity?",
    description:
      "Review every message, approval, and lead status from the inbox and analytics dashboard.",
  },
  {
    id: 7,
    title: "Can Vatas work with my CRM?",
    description:
      "Yes. Vatas sync qualified opportunities with the tools you already use.",
  },
  {
    id: 8,
    title: "How does pricing work?",
    description:
      "Pay $50 per qualified lead each month, or move to the $399/month subscription after twenty wins.",
  },
  {
    id: 9,
    title: "Is my data secure?",
    description:
      "We secure your connected accounts and knowledge hub with encryption, audit trails, and enterprise controls.",
  },
  {
    id: 10,
    title: "How fast can we launch?",
    description:
      "Most teams connect channels, upload playbooks, and see the first qualified lead in under a day.",
  },
];

export const FAQs = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="max-w-3xl mx-auto py-20 px-8">
      <Heading className="pt-4">Frequently asked questions</Heading>
      <div className="grid  gap-10 pt-20">
        {questions.map((item, i) => (
          <Accordion
            key={i}
            i={i}
            expanded={expanded}
            setExpanded={setExpanded}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};
