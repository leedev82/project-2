import React from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden ">
      {/* <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 z-10">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <Timer className="h-5 w-5 mr-2" />
          <p className="text-sm font-medium">
            Special Launch Offer: Save 50% on Annual Plans • Ends in 48 Hours
          </p>
        </div>
      </div> */}

      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="mb-6 inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              <span className="mr-2">⭐ 4.8/5 Rating on TalentPro Magazine</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Instantly Match with <span className="text-blue-600">Top Talent</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-8">
              Join 1,000+ recruiters who fill roles 3× faster using our AI-powered platform
            </h2>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <Button size="lg" className="w-full sm:w-auto">
                Unlock Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Book a Demo
              </Button>
            </div>
            <div className="mt-4">
              <p className="text-red-600 font-medium">
                🔥 Only 50 demo slots remaining this month
              </p>
            </div>
            <div className="mt-8 text-sm text-gray-600">
              <p>✓ No credit card required &nbsp;&nbsp;✓ 14-day guarantee &nbsp;&nbsp;✓ Cancel anytime</p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute -top-6 -left-6 bg-blue-600 h-16 w-16 rounded-full opacity-20"></div>
              <div className="absolute -bottom-8 -right-8 bg-purple-600 h-24 w-24 rounded-full opacity-20"></div>
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="AI Recruiting Platform" 
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <p className="font-medium text-gray-900">
                  "Cut our hiring time by 60% in the first month!"
                </p>
                <p className="text-sm text-gray-600">
                  - Sarah Chen, Head of Talent at TechCorp
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;