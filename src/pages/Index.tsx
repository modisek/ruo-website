
import HeroSlider from '@/components/home/HeroSlider';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Testimonials from '@/components/home/Testimonials';
import NewsletterSection from '@/components/home/NewsletterSection';
import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Index = () => {
  // Simulate parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.parallax-element');
      const scrollPosition = window.pageYOffset;

      scrollElements.forEach((element) => {
        const el = element as HTMLElement;
        const speed = parseFloat(el.dataset.speed || '0.1');
        const yPos = -(scrollPosition * speed);
        el.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax Slider */}
      <HeroSlider />

      {/* Company Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Welcome to <span className="text-primary">Ruolame Agric</span></h2>
              <p className="text-gray-700 mb-4">
                We are an agric shop located in Bokaa, Botswana that provides agricultural supplies, tools, and resources for local farmers and gardeners.
              </p>
              <p className="text-gray-700 mb-6">
                Our shop aims to become the go-to destination for high-quality stock feed, seeds, fertilizers, tools, veterinary services and expert advice for the local farming community.
              </p>
              <div className="flex items-center">
                <Link to="/about" className="text-primary font-medium flex items-center group">
                  Learn more about us
                  <ChevronRight className="ml-1 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="col-span-2">
                <CardContent className="p-4">
                  <div className="text-xl font-bold text-primary mb-2">Our Mission</div>
                  <div className="text-gray-600">To support local agriculture by providing quality supplies and fostering sustainable farming practices that make agriculture more sustainable in Botswana.</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-gray-600">Citizen Owned</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">12K+</div>
                  <div className="text-gray-600">Local Population</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <div className="parallax-section relative overflow-hidden bg-slate-50">
        <div
          className="parallax-element absolute -top-20 -right-20 w-72 h-72 bg-primary rounded-full opacity-5"
          data-speed="0.2"
        ></div>
        <div
          className="parallax-element absolute -bottom-40 -left-20 w-96 h-96 bg-yellow-400 rounded-full opacity-5"
          data-speed="0.15"
        ></div>
        <FeaturedProducts />
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
};

export default Index;
