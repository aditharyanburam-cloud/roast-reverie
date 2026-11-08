import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Story from '@/components/sections/Story';
import FeaturedMenu from '@/components/sections/FeaturedMenu';
import WhyUs from '@/components/sections/WhyUs';
import Visit from '@/components/sections/Visit';

function App() {
  return (
    <div className="min-h-screen bg-cream-100">
      <a
        href="#story"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-espresso-900 focus:px-5 focus:py-3 focus:text-cream-50"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <FeaturedMenu />
        <WhyUs />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}

export default App;
