"use client";
import React, { useState } from "react";
import Accordion from "./accordion";
import { Heading } from "./heading";

const questions = [
  {
    id: 1,
    title: "What is Applash?",
    description:
      "Applash is a platform that converts your existing web application into fully featured iOS and Android apps.",
  },
  {
    id: 2,
    title: "How does Applash convert my web app to mobile?",
    description:
      "Applash wraps your web app in a native container and generates installable packages without requiring additional code.",
  },
  {
    id: 3,
    title: "Which platforms are supported?",
    description:
      "Applash builds native apps for both the Apple App Store and Google Play Store.",
  },
  {
    id: 4,
    title: "Do I need to maintain separate codebases?",
    description:
      "No. Keep your web code as the single source of truth and Applash handles the mobile builds for you.",
  },
  {
    id: 5,
    title: "Can I send push notifications?",
    description:
      "Yes, Applash includes built-in push notification support to engage your users.",
  },
  {
    id: 6,
    title: "Does Applash work offline?",
    description:
      "Applash adds offline caching so your app remains usable even without an internet connection.",
  },
  {
    id: 7,
    title: "How are updates handled?",
    description:
      "Deploy updates to your web app and Applash automatically delivers them to your mobile users.",
  },
  {
    id: 8,
    title: "Is there a free trial?",
    description:
      "Yes, you can try Applash for free and generate your first mobile build in minutes.",
  },
  {
    id: 9,
    title: "How can I track user analytics?",
    description:
      "Applash provides in-app analytics to monitor installs, sessions, and engagement.",
  },
  {
    id: 10,
    title: "How do I get started?",
    description:
      "Sign up on our website and upload your web app URL to create your first mobile app with Applash.",
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
