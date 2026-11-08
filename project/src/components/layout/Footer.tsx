import { Facebook, Instagram, Twitter } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Logo from '@/components/layout/Logo';
import { NAV_LINKS, SOCIAL_LINKS } from '@/data/site';

const SOCIAL_ICONS: Record<string, LucideIcon> = {
  Instagram,
  Facebook,
  'X (Twitter)': Twitter,
};

export default function Footer() {
  return (
    <footer className="bg-espresso-900 text-cream-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-12 lg:px-10">
        <div className="md:col-span-5">
          <Logo tone="light" />
          <p className="mt-6 max-w-sm text-base leading-[1.6] text-beige-300">
            Handcrafted coffee, fresh bakes and a corner of Bengaluru made for slow mornings.
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-beige-200">Explore</h2>
          <ul className="mt-6 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-base text-cream-100 transition-colors duration-300 hover:text-terracotta-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-beige-200">Follow Along</h2>
          <ul className="mt-6 flex gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = SOCIAL_ICONS[social.label];
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.label} (opens in a new tab)`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-50/20 text-cream-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-terracotta-300 hover:bg-terracotta-600 hover:text-cream-50"
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream-50/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-sm text-beige-300 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>&copy; {new Date().getFullYear()} Roast &amp; Reverie. All rights reserved.</p>
          <p>14, 100 Feet Road, Indiranagar, Bengaluru</p>
        </div>
      </div>
    </footer>
  );
}
