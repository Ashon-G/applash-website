import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import {
  RocketIcon,
  MagicWandIcon,
  LayersIcon,
} from "@radix-ui/react-icons";

const features = [
  {
    Icon: RocketIcon,
    name: "Fast Integration",
    description:
      "Plug components into your project and start iterating instantly.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 md:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-rose-200 to-pink-200" />
    ),
  },
  {
    Icon: MagicWandIcon,
    name: "Polished Animations",
    description: "Delight users with buttery-smooth transitions and effects.",
    href: "#",
    cta: "See examples",
    className: "col-span-3 md:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-indigo-200 to-blue-200" />
    ),
  },
  {
    Icon: LayersIcon,
    name: "Composable",
    description:
      "Mix and match building blocks to craft unique mobile-first layouts.",
    href: "#",
    cta: "Browse components",
    className: "col-span-3 md:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-green-200 via-emerald-200 to-teal-200" />
    ),
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-24">
      <h2 className="text-center text-4xl font-bold mb-12">Features</h2>
      <BentoGrid className="max-w-5xl mx-auto">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
}
