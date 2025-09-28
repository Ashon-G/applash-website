import type { Metadata } from "next";
import { Container } from "@/components/container";
import { privacyHtml } from "@/constants/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | Vatas",
  description:
    "Understand how Vatas collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="min-h-screen bg-white pt-32 pb-24 text-neutral-900">
      <Container className="space-y-12">
        <div className="space-y-4 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-600">
            Legal
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mx-auto max-w-3xl text-base text-neutral-600">
            We value your trust. Learn more about the data we collect, why we collect it, and how we
            keep it secure.
          </p>
        </div>
        <div
          className="legal-content mx-auto max-w-5xl rounded-3xl border border-neutral-200 bg-white p-8 text-sm leading-relaxed shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-12 [&_*]:text-neutral-800 [&_a]:text-cyan-600 [&_a]:underline [&_a:hover]:text-cyan-700 [&_strong]:text-neutral-900 [&_h1]:mb-4 [&_h1]:text-2xl [&_h2]:mb-4 [&_h2]:text-xl [&_h3]:mb-3 [&_h3]:text-lg [&_p]:mb-4 [&_li]:my-2 [&_ul]:list-outside [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6"
          dangerouslySetInnerHTML={{ __html: privacyHtml }}
        />
      </Container>
    </section>
  );
}
