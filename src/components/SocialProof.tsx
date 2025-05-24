import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  title: string;
  company: string;
  image: string;
  companyLogo: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "The AI matching is incredibly accurate. We've reduced our time-to-hire by 65% since implementing this platform.",
    author: "Sarah Chen",
    title: "Head of Talent",
    company: "TechCorp",
    image: "/testimonials/sarah-chen.jpg",
    companyLogo: "/companies/techcorp.svg"
  },
  {
    id: 2,
    quote: "The skill assessment framework has transformed how we evaluate candidates. Our quality of hire has improved significantly.",
    author: "Michael Rodriguez",
    title: "VP of Recruiting",
    company: "InnovateCo",
    image: "/testimonials/michael-rodriguez.jpg",
    companyLogo: "/companies/innovateco.svg"
  },
  {
    id: 3,
    quote: "Finally, a recruiting platform that understands what modern hiring teams actually need. This has become our go-to solution.",
    author: "Emily Watson",
    title: "Technical Recruiter",
    company: "FutureScale",
    image: "/testimonials/emily-watson.jpg",
    companyLogo: "/companies/futurescale.svg"
  }
];

const companyLogos = [
  { name: 'Amazon', logo: '/companies/amazon.svg' },
  { name: 'Meta', logo: '/companies/meta.svg' },
  { name: 'Google', logo: '/companies/google.svg' },
  { name: 'Microsoft', logo: '/companies/microsoft.svg' },
  { name: 'Apple', logo: '/companies/apple.svg' },
  { name: 'Netflix', logo: '/companies/netflix.svg' }
];

const SocialProof: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Ratings Bar */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16 text-center">
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <span className="font-semibold">4.8★ on G2</span>
          </div>
          <div className="h-6 w-px bg-gray-300 hidden md:block" />
          <div className="font-semibold text-blue-600">
            Winner Best ATS Integration 2024
          </div>
          <div className="h-6 w-px bg-gray-300 hidden md:block" />
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <span className="font-semibold">4.9★ on TrustRadius</span>
          </div>
        </div>

        {/* Company Logos */}
        <div className="mb-16">
          <p className="text-center text-sm font-medium text-gray-500 mb-8">
            TRUSTED BY INDUSTRY LEADERS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {companyLogos.map((company) => (
              <img
                key={company.name}
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-start gap-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <blockquote className="text-xl text-gray-900 mb-4">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center gap-4">
                          <div>
                            <div className="font-medium text-gray-900">
                              {testimonial.author}
                            </div>
                            <div className="text-sm text-gray-600">
                              {testimonial.title} at {testimonial.company}
                            </div>
                          </div>
                          <img
                            src={testimonial.companyLogo}
                            alt={`${testimonial.company} logo`}
                            className="h-8 opacity-80"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentTestimonial(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof; 