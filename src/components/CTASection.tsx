import React from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Hiring Process?
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto text-blue-100">
          Join thousands of companies that have revolutionized their recruitment using Vetlyhire. Your perfect candidates are waiting.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button 
            className="bg-grey text-blue-700 hover:bg-blue-50"
            size="lg"
          >
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            className="bg-transparent border-2 border-white hover:bg-white/10"
            size="lg"
          >
            Schedule a Demo
          </Button>
        </div>
        
        <p className="mt-8 text-blue-100">
          No credit card required • Free 14-day trial • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTASection;