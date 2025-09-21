import { AmbientColor } from "@/components/ambient-color";
import { CTA } from "@/components/cta";
import { FeatureIconContainer } from "@/components/features/feature-icon-container";
import { Heading } from "@/components/heading";
import { PricingGrid } from "@/components/pricing-grid";
import { Subheading } from "@/components/subheading";
import { Testimonials } from "@/components/testimonials";
import { TestimonialsMarquee } from "@/components/testimonials/marquee";
import { IconReceiptFilled } from "@tabler/icons-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Vatas",
  description:
    "Only pay when Vatas deliver qualified leads, or lock in a subscription once you consistently close 20+ new deals a month.",
  openGraph: {
    images: ["/banner.png"],
  },
};

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden">
      <AmbientColor />
      <div className="py-20 sm:py-40">
        <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
          <IconReceiptFilled className="h-6 w-6 text-cyan-500" />
        </FeatureIconContainer>
        <Heading as="h1" className="mt-4">
          Results-based pricing
        </Heading>
        <Subheading>
          Straightforward pricing for teams that want AI sellers driving pipeline—no hidden retainers.
        </Subheading>
        <PricingGrid />
      </div>
      <div className="pb-40">
        <TestimonialsMarquee />
      </div>
      <CTA />
    </div>
  );
}
