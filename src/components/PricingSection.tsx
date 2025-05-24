import React from 'react';
import { Check, X } from 'lucide-react';
import Button from './Button';

const pricingPlans = [
  {
    name: "Free Trial",
    price: "$0",
    period: "14 days",
    description: "Perfect for testing the waters",
    features: [
      "5 active job listings",
      "AI candidate matching",
      "Basic skill assessment",
      "Video interviews",
      "Email support"
    ],
    limitations: [
      "No analytics",
      "No API access",
      "Limited candidates",
    ],
    buttonText: "Start Free Trial",
    highlight: false
  },
  {
    name: "Professional",
    price: "$99",
    period: "per month",
    description: "Best for growing teams",
    features: [
      "25 active job listings",
      "AI candidate matching",
      "Advanced skill assessment",
      "Video interviews with AI insights",
      "Analytics dashboard",
      "API access",
      "Priority support",
      "Custom branding"
    ],
    limitations: [],
    buttonText: "Get Started",
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored plan",
    description: "For large organizations",
    features: [
      "Unlimited job listings",
      "AI candidate matching",
      "Complete skill assessment suite",
      "Advanced video interviews",
      "Full analytics suite",
      "API access",
      "Dedicated account manager",
      "Custom integration",
      "SSO & advanced security",
      "SLA guarantees"
    ],
    limitations: [],
    buttonText: "Contact Sales",
    highlight: false
  }
];

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for your recruiting needs. No hidden fees or long-term commitments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`
                bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl
                ${plan.highlight ? 'ring-2 ring-blue-600 transform md:-translate-y-4' : ''}
              `}
            >
              {plan.highlight && (
                <div className="bg-blue-600 text-white text-center py-2 font-bold">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <h4 className="font-medium text-gray-900 mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation, idx) => (
                      <li key={idx} className="flex items-start text-gray-500">
                        <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  variant={plan.highlight ? 'primary' : 'outline'} 
                  className="w-full"
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 text-gray-600">
          <p>All plans include: Secure data storage • Regular updates • 99.9% uptime guarantee</p>
          <p className="mt-4">Need a custom solution? <a href="#" className="text-blue-600 font-medium">Contact our sales team</a></p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;