import { ArrowUpRight } from 'lucide-react';
import type { MenuItem } from '@/data/site';
import Reveal from '@/components/ui/Reveal';

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

const priceFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
});

export default function MenuCard({ item, index }: MenuCardProps) {
  return (
    <Reveal delay={index * 120} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-cream-50 shadow-[0_1px_0_rgba(58,39,25,0.06),0_18px_40px_-24px_rgba(58,39,25,0.35)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_1px_0_rgba(58,39,25,0.06),0_30px_60px_-28px_rgba(58,39,25,0.45)]">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={item.image}
            alt={item.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-110"
          />
          <span className="absolute left-4 top-4 rounded-full bg-cream-50/95 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-espresso-900 shadow-sm">
            {item.tag}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-2xl leading-tight text-espresso-900">{item.name}</h3>
            <p className="shrink-0 pt-1 text-lg font-semibold text-terracotta-600">
              {priceFormatter.format(item.price)}
            </p>
          </div>
          <p className="mt-3 flex-1 text-sm leading-[1.65] text-espresso-500">{item.description}</p>
          <a
            href="#visit"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-espresso-900 transition-colors duration-300 hover:text-terracotta-600"
          >
            Visit to order
            <ArrowUpRight
              size={16}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </article>
    </Reveal>
  );
}
