import { AmbientColor } from "@/components/ambient-color";
import { ContactForm } from "@/components/contact-form";
import { CTA } from "@/components/cta";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import { Tools } from "@/components/tools";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Vatas",
  description:
    "Reach the Vatas team to see how autonomous AI sellers can qualify and close leads from your social channels 24/7.",
  openGraph: {
    images: ["/banner.png"],
  },
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      <AmbientColor />
      <ContactForm />
    </div>
  );
}
