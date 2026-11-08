import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/layout/Logo';
import ButtonLink from '@/components/ui/ButtonLink';
import { NAV_LINKS } from '@/data/site';
import { useScrolled } from '@/hooks/useScrolled';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScrolled(24);
  const isSolid = isScrolled || isOpen;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isSolid
          ? 'bg-cream-100/95 py-3 shadow-[0_1px_0_rgba(58,39,25,0.08)] backdrop-blur-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Logo tone="dark" />

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-2 text-sm font-medium tracking-wide text-espresso-700 transition-colors duration-300 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:text-terracotta-600 hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink href="#menu" className="hidden px-5 py-2.5 md:inline-flex">
            Explore Menu
          </ButtonLink>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center rounded-full text-espresso-900 transition-colors duration-300 hover:bg-beige-100 md:hidden"
          >
            {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-menu"
          className="animate-fade-in border-t border-espresso-700/10 bg-cream-100 md:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto flex max-w-7xl flex-col px-6 py-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-espresso-700/10 py-4 font-display text-2xl text-espresso-900 transition-colors duration-300 hover:text-terracotta-600"
              >
                {link.label}
              </a>
            ))}
            <ButtonLink href="#menu" onClick={closeMenu} className="mt-6 w-full">
              Explore Our Menu
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  );
}
