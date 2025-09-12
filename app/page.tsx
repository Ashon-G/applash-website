import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { VideoText } from "@/components/magicui/video-text";
import PhoneDemo from "@/components/FloatingPhone";
import { SpringCards } from "@/components/SpringCards";
import AccordionSolutions from "@/components/AccordionSolutions";
import FeaturesGrid from "@/components/FeaturesGrid";
import { Button } from "@/components/ui/button";
import CutoutTextLoader from "@/components/CutoutTextLoader";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroHighlight className="flex flex-col items-center justify-center text-center gap-6 py-24">
        <VideoText
          as="h1"
          src="https://videos.pexels.com/video-files/1409837/1409837-hd_1920_1080_30fps.mp4"
          fontSize={10}
          className="h-40 w-full"
        >
          Applash
        </VideoText>
        <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Build stunning mobile experiences with our curated library of
          <Highlight>animated components</Highlight>.
        </p>
        <Button size="lg" asChild className="mt-4">
          <a href="#get-started">Get Started</a>
        </Button>
      </HeroHighlight>

      <CutoutTextLoader />

      <PhoneDemo />

      <FeaturesGrid />

      <SpringCards />

      <section className="py-24">
        <h2 className="text-4xl font-bold text-center mb-8">
          Custom Cursor
        </h2>
        <FollowerPointerCard className="mx-auto max-w-md rounded-xl border p-8 text-lg" title="Applash">
          Move your cursor here to see the pointer component in action.
        </FollowerPointerCard>
      </section>

      <AccordionSolutions />

      <section id="get-started" className="py-24 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to build?</h2>
        <p className="max-w-xl mx-auto mb-8 text-lg text-gray-600">
          Explore the components and craft your own stunning landing pages.
        </p>
        <Button size="lg">Join Now</Button>
      </section>

      <footer className="py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Applash. All rights reserved.
      </footer>
    </div>
  );
}
