import { ArrowRight } from 'lucide-react';
import ButtonLink from '@/components/ui/ButtonLink';

const HIGHLIGHTS = ['Roasted in small batches', 'Bakes from 6:30 AM', 'Est. 2019, Indiranagar'];

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-cream-200 text-espresso-900"
    >
      <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-36 lg:px-10 lg:pb-24">
        <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-terracotta-600">
          Speciality coffee &amp; fresh bakery
        </p>

        <h1
          id="hero-title"
          className="animate-fade-up mt-6 max-w-4xl font-display text-5xl leading-[1.06] text-espresso-900 sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
          style={{ animationDelay: '120ms' }}
        >
          Handcrafted coffee, <em className="text-terracotta-600">warm bakes</em>, and a place to linger.
        </h1>

        <p
          className="animate-fade-up mt-8 max-w-xl text-base leading-[1.6] text-espresso-700 sm:text-lg"
          style={{ animationDelay: '240ms' }}
        >
          Every cup is brewed to order and every pastry is baked before sunrise. Settle into a
          corner table in Indiranagar and let the morning slow down.
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: '360ms' }}
        >
          <ButtonLink href="#menu" className="px-8">
            Explore Our Menu
            <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
          </ButtonLink>
          <ButtonLink href="#visit" variant="outline">
            Plan Your Visit
          </ButtonLink>
        </div>

        <ul
          className="animate-fade-up mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-espresso-700/15 pt-8 text-sm text-espresso-700"
          style={{ animationDelay: '480ms' }}
        >
          {HIGHLIGHTS.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-terracotta-600" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
