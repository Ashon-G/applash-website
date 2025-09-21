"use client";
import React, { useState } from "react";
import Accordion from "./accordion";
import { Heading } from "./heading";

const questions = [
  {
    id: 1,
    title: "What is Vatas?",
    description:
      "Vatas is a mobile app digital sales force that uses AI agents to hunt, qualify, and close leads across social networks 24/7.",
  },
  {
    id: 2,
    title: "How do vatas find new leads?",
    description:
      "Each vata crawls LinkedIn, Reddit, communities, and inboxes to spot buying signals, join threads, and book meetings with the right prospects.",
  },
  {
    id: 3,
    title: "What data should I connect?",
    description:
      "Link your social profiles, storage, analytics, and knowledge bases so vatas understand your business, customers, and value props.",
  },
  {
    id: 4,
    title: "How do vatas learn our voice?",
    description:
      "Upload assets to the knowledge hub and tag ideal customer personas. Vatas adapt their outreach with every conversation and analytics signal you provide.",
  },
  {
    id: 5,
    title: "What happens when a vata gets stuck?",
    description:
      "They ping you through the inbox, capture your response, and store it for future conversations so the same question is never escalated twice.",
  },
  {
    id: 6,
    title: "How do I monitor activity?",
    description:
      "Review every message, approval, and lead status from the inbox and analytics dashboard to stay in full control of your pipeline.",
  },
  {
    id: 7,
    title: "Can Vatas work with my CRM?",
    description:
      "Yes. Vatas sync qualified opportunities with the tools you already use so reps can pick up the conversation without missing context.",
  },
  {
    id: 8,
    title: "How does pricing work?",
    description:
      "Pay $50 per qualified lead on the monthly invoice, or switch to the $399/month subscription if you plan to close more than twenty new deals every month.",
  },
  {
    id: 9,
    title: "Is my data secure?",
    description:
      "We treat your connected accounts and knowledge hub with enterprise-grade security, encryption, and audit trails for every action a vata takes.",
  },
  {
    id: 10,
    title: "How fast can we launch?",
    description:
      "Most teams connect their channels, upload their playbooks, and watch vatas source their first qualified lead in less than a day.",
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
