import React from 'react';
import { Star } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const clientLogos = [
  { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" },
  { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" },
  { name: "Meta", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png" },
 ];

const LogoCard = ({ url, name }: { url: string; name: string }) => {
  return (
    <div className={cn(
      "relative mx-4 flex h-16 w-32 items-center justify-center px-4",
      "rounded-lg border border-gray-200 bg-white",
      "transition-all duration-300 ease-in-out hover:scale-105"
    )}>
      <img 
        src={url} 
        alt={name} 
        className="max-h-12 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0" 
      />
    </div>
  );
};

const testimonials = [
  {
    quote: "Hirevetly helped us cut hiring time by 63%. We filled 12 senior roles in just 2 weeks - something that used to take months.",
    metrics: "60% faster hiring • 85% acceptance rate",
    author: "Sarah Johnson",
    position: "HR Director, TechCorp",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    quote: "The AI matching is incredibly accurate. Every candidate we've hired through Hirevetly has exceeded expectations.",
    metrics: "95% candidate quality • 8 roles filled",
    author: "Michael Chen",
    position: "Talent Acquisition, InnovateCo",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    quote: "Found three perfect senior engineers in one week. Our time-to-hire dropped from 45 days to just 6 days.",
    metrics: "87% time saved • 100% retention",
    author: "Jessica Rivera",
    position: "CTO, StartupX",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const awards = [
  { name: "TalentPro Magazine", rating: "4.8/5", review: "Best AI Recruiting Platform 2024" },
  { name: "HR Tech Awards", rating: "Winner", review: "Innovation in Recruitment" },
  { name: "G2 Crowd", rating: "4.9/5", review: "Leader in Recruiting Software" }
];

const SocialProofSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Awards & Recognition */}
        <div className="text-center mb-16">
          <h3 className="text-lg font-medium text-gray-600 uppercase tracking-wider mb-8">Award-Winning Platform</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-2">{award.rating}</p>
                <p className="text-gray-600 font-medium">{award.name}</p>
                <p className="text-blue-600 mt-2">{award.review}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trusted By Logos */}
        <div className="text-center mb-16">
          <h3 className="text-lg font-medium text-gray-600 uppercase tracking-wider mb-4">
            Trusted by 1,000+ industry leaders
          </h3>
          <p className="text-gray-600 mb-8">Including 40% of Fortune 500 companies</p>
          
          <div className="relative mx-auto max-w-6xl overflow-hidden">
            <Marquee className="py-2" pauseOnHover>
              {clientLogos.map((logo) => (
                <LogoCard key={logo.name} {...logo} />
              ))}
            </Marquee>
            <Marquee className="py-2" pauseOnHover reverse>
              {[...clientLogos].reverse().map((logo) => (
                <LogoCard key={`${logo.name}-reverse`} {...logo} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-50"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-50"></div>
          </div>
        </div>
        
        {/* Media Mentions */}
        <div className="text-center mb-16">
          <h3 className="text-lg font-medium text-gray-600 uppercase tracking-wider mb-8">Featured in</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <span className="text-gray-800 font-serif text-xl">Forbes</span>
            <span className="text-gray-800 font-sans text-xl font-bold">WIRED</span>
            <span className="text-gray-800 font-serif italic text-xl">Business Insider</span>
            <span className="text-gray-800 font-sans text-xl font-bold">TechCrunch</span>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real Results from Real Customers</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of companies that have transformed their hiring process with Hirevetly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-blue-700 font-medium text-sm">{testimonial.metrics}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Join over 1,000 companies already transforming their hiring process
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;