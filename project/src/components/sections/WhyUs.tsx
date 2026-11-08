import { Heart, Leaf, Coffee } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

interface SellingPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

const SELLING_POINTS: SellingPoint[] = [
  {
    icon: Leaf,
    title: 'Quality ingredients',
    description:
      'We buy green coffee directly from small farms, roast it in batches of no more than twelve kilos, and source dairy and seasonal fruit from local producers we visit ourselves.',
  },
  {
    icon: Coffee,
    title: 'Handcrafted beverages',
    description:
      'Every espresso is dialled in each morning, every milk is steamed to order, and every pour-over is timed by hand. Small details, poured with patience.',
  },
  {
    icon: Heart,
    title: 'Welcoming atmosphere',
    description:
      'Soft light, long wooden tables and a playlist that never gets in the way of conversation. Bring a book, a laptop or a friend. You are always welcome to stay.',
  },
];

export default function WhyUs() {
  return (
    <section aria-labelledby="why-title" className="bg-cream-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Why Roast & Reverie"
            title="Three things we will never compromise on."
            description="Good coffee is only part of the story. These are the promises that shape every visit."
          />
        </Reveal>

        <ul className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {SELLING_POINTS.map((point, index) => {
            const Icon = point.icon;
            return (
              <li key={point.title} className="h-full">
                <Reveal delay={index * 120} className="h-full">
                  <div className="group flex h-full flex-col rounded-[1.5rem] border border-espresso-700/10 bg-cream-50 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-terracotta-300/60 hover:shadow-[0_24px_48px_-30px_rgba(58,39,25,0.5)] sm:p-10">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-terracotta-600 text-cream-50 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
                      <Icon size={24} strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <p className="mt-8 font-display text-sm italic text-terracotta-600">0{index + 1}</p>
                    <h3 className="mt-2 font-display text-2xl leading-tight text-espresso-900">{point.title}</h3>
                    <p className="mt-4 text-sm leading-[1.7] text-espresso-500 sm:text-base">{point.description}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
