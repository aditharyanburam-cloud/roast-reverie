import Reveal from '@/components/ui/Reveal';

const STORY_IMAGE =
  'https://images.pexels.com/photos/6612638/pexels-photo-6612638.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const DETAIL_IMAGE =
  'https://images.pexels.com/photos/302891/pexels-photo-302891.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function Story() {
  return (
    <section id="story" aria-labelledby="story-title" className="scroll-mt-24 bg-cream-100 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        <Reveal className="relative lg:col-span-6">
          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src={STORY_IMAGE}
              alt="A barista in a black apron serving a freshly poured coffee to a smiling guest"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-105 sm:aspect-[5/4] lg:aspect-[4/5]"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 w-40 overflow-hidden rounded-2xl border-[6px] border-cream-100 shadow-xl sm:-right-8 sm:w-52">
            <img
              src={DETAIL_IMAGE}
              alt="Close-up of latte art poured into a white cup"
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-5 lg:col-start-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-terracotta-600">Our Story</p>
          <h2
            id="story-title"
            className="mt-4 font-display text-4xl leading-[1.12] text-espresso-900 sm:text-5xl"
          >
            Born from a small corner and a stubborn love for good coffee.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-[1.7] text-espresso-700 sm:text-lg">
            <p>
              Roast &amp; Reverie began in 2019 as a single counter, a secondhand espresso machine and
              a promise to know the name of every farmer behind our beans. Today it is a neighbourhood
              room in Indiranagar where regulars trade stories over the first cup of the day.
            </p>
            <p>
              We roast in small batches, bake our pastries in-house, and train every barista to treat
              a cappuccino with the same care as a conversation. The result is a café that feels
              considered without ever feeling precious.
            </p>
          </div>
          <div className="mt-10 flex items-center gap-4 border-t border-espresso-700/15 pt-8">
            <p className="font-display text-xl italic text-espresso-900">Ananya &amp; Rohan Iyer</p>
            <span className="text-sm text-espresso-500">Founders</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
