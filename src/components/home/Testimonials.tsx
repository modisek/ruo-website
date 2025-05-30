
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  avatar: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Lorato Motsewi',
    role: 'Happy Customer',
    comment: 'The quality of feed from Ruolame is incredible. Everything is so fresh and I love knowing I\'m supporting local farmers too.',
    avatar: '',
    initials: 'LM',
  },
  {
    id: '2',
    name: 'Michael Morake',
    role: 'Farmer',
    comment: 'The quality is top-notch, and I love that they source everything locally. My cows are thriving, and I\'ve noticed a real difference in their energy and weight gain.',
    avatar: '',
    initials: 'MM',
  },
  {
    id: '3',
    name: 'Tshepofatso Lesolé',
    role: 'Farmer',
    comment: 'I recommend Ruolame to all my clients. The organic options and farm-fresh quality make healthy eating so much more enjoyable and sustainable.',
    avatar: '',
    initials: 'TL',
  },
  {
    id: '4',
    name: 'Kagiso Motlhaba',
    role: 'Dairy Farmer',
    comment: 'Since switching to Ruolame\'s premium feed, my dairy production has increased by 15%. The quality and consistency are unmatched.',
    avatar: '',
    initials: 'KM',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const showNextTestimonials = () => {
    setActiveIndex((prevIndex) =>
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 3
    );
  };

  const showPrevTestimonials = () => {
    setActiveIndex((prevIndex) =>
      prevIndex - 3 < 0 ? Math.max(0, testimonials.length - 3) : prevIndex - 3
    );
  };

  // Calculate which testimonials to show
  const visibleTestimonials = testimonials.slice(activeIndex, activeIndex + 3);
  // If we need to wrap around to the beginning
  if (visibleTestimonials.length < 3) {
    visibleTestimonials.push(...testimonials.slice(0, 3 - visibleTestimonials.length));
  }

  return (
    <section className="py-16 bg-primary-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What <span className="text-primary">Our Customers</span> Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our community of happy customers
            have to say about our products.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <svg className="text-yellow-400 h-5 w-5 inline-block" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
                      </svg>
                      <svg className="text-yellow-400 h-5 w-5 inline-block" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
                      </svg>
                      <svg className="text-yellow-400 h-5 w-5 inline-block" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
                      </svg>
                      <svg className="text-yellow-400 h-5 w-5 inline-block" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
                      </svg>
                      <svg className="text-yellow-400 h-5 w-5 inline-block" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
                      </svg>
                    </div>

                    <p className="italic text-gray-600 flex-grow mb-6">{testimonial.comment}</p>

                    <div className="flex items-center mt-auto">
                      <Avatar className="h-12 w-12 border-2 border-primary">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.initials}</AvatarFallback>
                      </Avatar>
                      <div className="ml-3">
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors z-10"
            onClick={showPrevTestimonials}
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors z-10"
            onClick={showNextTestimonials}
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
