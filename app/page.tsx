import FloatingPhone from "@/components/FloatingPhone";
import { SpringCards } from "@/components/SpringCards";
import AccordionSolutions from "@/components/AccordionSolutions";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="flex flex-col items-center px-6 pb-32 pt-24 text-center">
        <SparklesText className="mb-6 text-6xl">Applash</SparklesText>
        <p className="mb-8 max-w-2xl text-lg text-muted-foreground">
          Convert your existing web app into native mobile apps for iOS and Android—no mobile code required.
        </p>
        <div className="mb-20 flex gap-4">
          <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
            Get Started
          </Button>
          <Button variant="outline" className="border-violet-600 text-violet-600">
            Docs
          </Button>
        </div>
        <FloatingPhone />
      </section>

      <SpringCards />
      <AccordionSolutions />
    </div>
  );
}
