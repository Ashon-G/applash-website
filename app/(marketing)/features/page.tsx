import { AmbientColor } from "@/components/ambient-color";
import { CTA } from "@/components/cta";
import { Features } from "@/components/features";
import { FeaturesGrid } from "@/components/features/features-grid";
import { SpeedHighlights } from "@/components/features/speed-highlights";
import { Testimonials } from "@/components/testimonials";
import { Tools } from "@/components/tools";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features | Vatas",
  description:
    "Explore the Vatas digital sales force—from channel connections and knowledge hub training to inbox oversight and analytics that prove every closed lead.",
  openGraph: {
    images: ["/banner.png"],
  },
};

export default function FeaturesPage() {
  return (
    <div className="relative overflow-hidden">
      <AmbientColor />
      <Tools />
      <Features />
      <FeaturesGrid />
      <SpeedHighlights />

      <div className="pb-40">
        <Testimonials />
      </div>
      <CTA />
    </div>
  );
}
