import type { ReactNode } from 'react';
import { Clock, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import ButtonLink from '@/components/ui/ButtonLink';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { CONTACT, OPENING_HOURS } from '@/data/site';

const VISIT_IMAGE =
  'https://images.pexels.com/photos/28097275/pexels-photo-28097275.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

interface DetailBlockProps {
  icon: LucideIcon;
  label: string;
  children: ReactNode;
}

function DetailBlock({ icon: Icon, label, children }: DetailBlockProps) {
  return (
    <div className="flex gap-4">
      <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-beige-100 text-terracotta-600">
        <Icon size={18} aria-hidden="true" />
      </span>
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-espresso-500">{label}</h3>
        <div className="mt-2 text-base leading-[1.6] text-espresso-900">{children}</div>
      </div>
    </div>
  );
}

export default function Visit() {
  return (
    <section id="visit" aria-labelledby="visit-title" className="scroll-mt-24 bg-beige-100 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            eyebrow="Visit Us"
            title="Come find us in Indiranagar."
            description="A short walk from the metro, with a seat saved for you at the window bar."
          />

          <div className="mt-12 space-y-8">
            <DetailBlock icon={MapPin} label="Address">
              {CONTACT.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </DetailBlock>

            <DetailBlock icon={Clock} label="Opening hours">
              <dl className="space-y-2">
                {OPENING_HOURS.map((slot) => (
                  <div key={slot.days} className="flex flex-wrap justify-between gap-x-6 border-b border-espresso-700/10 pb-2">
                    <dt className="text-espresso-500">{slot.days}</dt>
                    <dd className="font-medium">{slot.time}</dd>
                  </div>
                ))}
              </dl>
            </DetailBlock>

            <DetailBlock icon={Phone} label="Contact">
              <p>
                <a
                  href={CONTACT.phoneHref}
                  className="transition-colors duration-300 hover:text-terracotta-600"
                >
                  {CONTACT.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-terracotta-600"
                >
                  <Mail size={14} aria-hidden="true" />
                  {CONTACT.email}
                </a>
              </p>
            </DetailBlock>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <ButtonLink
              href={CONTACT.directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get directions to Roast and Reverie (opens in a new tab)"
            >
              Get Directions
              <ArrowUpRight size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </ButtonLink>
            <ButtonLink href={CONTACT.phoneHref} variant="outline">
              Call the Café
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-6 lg:col-start-7">
          <div className="relative h-full min-h-[420px] overflow-hidden rounded-[2rem]">
            <img
              src={VISIT_IMAGE}
              alt="Inside Roast and Reverie, with a bright espresso bar and shelves of cups"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
            />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-cream-50/95 p-6 shadow-lg backdrop-blur-sm">
              <p className="font-display text-xl text-espresso-900">Walk-ins always welcome.</p>
              <p className="mt-2 text-sm leading-[1.6] text-espresso-500">
                Reservations are not required for tables, though we are happy to hold one for groups of
                six or more.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
