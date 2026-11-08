import { FEATURED_MENU } from '@/data/site';
import MenuCard from '@/components/ui/MenuCard';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

export default function FeaturedMenu() {
  return (
    <section id="menu" aria-labelledby="menu-title" className="scroll-mt-24 bg-beige-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Featured Menu"
            title="Four favourites, made the way we love them."
            description="A few of the cups and bakes our guests return for. All prices are in Indian Rupees."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          {FEATURED_MENU.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
