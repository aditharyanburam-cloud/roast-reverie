import { Coffee } from 'lucide-react';

interface LogoProps {
  tone: 'light' | 'dark';
}

export default function Logo({ tone }: LogoProps) {
  const isLight = tone === 'light';

  return (
    <a href="#home" className="group flex items-center gap-3" aria-label="Roast and Reverie, back to top">
      <span
        className={`flex h-11 w-11 items-center justify-center rounded-full border transition-transform duration-500 group-hover:-rotate-12 ${
          isLight ? 'border-cream-50/60 text-cream-50' : 'border-terracotta-600 text-terracotta-600'
        }`}
      >
        <Coffee size={20} strokeWidth={1.6} aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-xl tracking-tight ${isLight ? 'text-cream-50' : 'text-espresso-900'}`}
        >
          Roast &amp; Reverie
        </span>
        <span
          className={`mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] ${
            isLight ? 'text-beige-200' : 'text-espresso-500'
          }`}
        >
          Speciality Café
        </span>
      </span>
    </a>
  );
}
