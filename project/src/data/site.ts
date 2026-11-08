export interface NavLink {
  label: string;
  href: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  tag: string;
  image: string;
  imageAlt: string;
}

export interface OpeningHours {
  days: string;
  time: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Visit Us', href: '#visit' },
];

export const FEATURED_MENU: MenuItem[] = [
  {
    id: 'velvet-cappuccino',
    name: 'Velvet Cappuccino',
    description:
      'A double ristretto crowned with silky micro-foam and a whisper of cocoa. Built on our house blend, roasted in Coorg.',
    price: 240,
    tag: 'House favourite',
    image:
      'https://images.pexels.com/photos/2638027/pexels-photo-2638027.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Overhead view of a cappuccino beside coffee beans on a light surface',
  },
  {
    id: 'butter-croissant',
    name: 'Butter Croissant',
    description:
      'Laminated over three days for a shatter-thin crust and an airy, honeycombed crumb. Shaped and baked fresh every morning.',
    price: 180,
    tag: 'Baked daily',
    image:
      'https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Golden butter croissant resting on a wooden board',
  },
  {
    id: 'single-origin-pour-over',
    name: 'Single-Origin Pour-Over',
    description:
      'A bright, floral Ethiopian filter coffee brewed by hand and served in a ceramic carafe. Ask our baristas what is in season.',
    price: 320,
    tag: 'Seasonal',
    image:
      'https://images.pexels.com/photos/11494420/pexels-photo-11494420.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Coffee dripping through a ceramic pour-over dripper',
  },
  {
    id: 'cold-brew-tonic',
    name: 'Cold Brew Tonic',
    description:
      'Our cold brew, steeped for eighteen hours and lifted with citrus tonic over ice. Crisp, refreshing and unhurried.',
    price: 280,
    tag: 'Refreshing',
    image:
      'https://images.pexels.com/photos/38028988/pexels-photo-38028988.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Tall glass of iced coffee with a metal straw on a dark table',
  },
];

export const OPENING_HOURS: OpeningHours[] = [
  { days: 'Monday to Friday', time: '6:30 AM to 10:30 PM' },
  { days: 'Saturday', time: '7:00 AM to 11:30 PM' },
  { days: 'Sunday', time: '7:30 AM to 10:00 PM' },
];

export const CONTACT = {
  address: ['14, 100 Feet Road', 'Indiranagar, Bengaluru', 'Karnataka 560038'],
  phone: '+91 80 4123 4567',
  phoneHref: 'tel:+918041234567',
  email: 'hello@roastandreverie.in',
  directionsHref:
    'https://www.google.com/maps/search/?api=1&query=Roast+%26+Reverie+Indiranagar+Bengaluru',
};

export const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com/roastandreverie' },
  { label: 'Facebook', href: 'https://facebook.com/roastandreverie' },
  { label: 'X (Twitter)', href: 'https://x.com/roastandreverie' },
];
