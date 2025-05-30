import React from 'react';
import { Check, Clock, UserCheck, Calendar } from 'lucide-react';
import Button from './Button';
import { ContainerScroll } from './ContainerScroll';

const benefits = [
  {
    icon: <Clock className="h-6 w-6 text-teal-600" />,
    title: "Reduced Time-to-Hire",
    description: "Cut your hiring timeline by up to 75% with instant matches and streamlined processes."
  },
  {
    icon: <UserCheck className="h-6 w-6 text-teal-600" />,
    title: "Higher Quality Candidates",
    description: "Pre-vetted talent pool ensures you only see candidates who match your exact requirements."
  },
  {
    icon: <Calendar className="h-6 w-6 text-teal-600" />,
    title: "Seamless Scheduling",
    description: "Eliminate back-and-forth emails with our integrated scheduling system."
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white overflow-hidden">
      <ContainerScroll
        backgroundImage="/resumeai.png"
        titleComponent={
          <div className="w-full text-center mb-12 pt-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Transform Your Recruiting Process
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Say goodbye to endless resume screening and unqualified candidates. Our platform delivers results from day one.
            </p>
          </div>
        }
      >
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 bg-white bg-opacity-20 rounded-full p-2">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">{benefit.title}</h3>
                      <p className="text-blue-100">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <Button 
                  className="bg-grey text-blue-700 hover:bg-blue-50"
                  size="lg"
                >
                  Reserve a Booth Interview
                </Button>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Why Recruiters Love Us:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-teal-400 mr-3 mt-0.5" />
                  <span>Average 85% reduction in screening time</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-teal-400 mr-3 mt-0.5" />
                  <span>93% of hires made through Vetlyhire stay 12+ months</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-teal-400 mr-3 mt-0.5" />
                  <span>Intelligent matching that improves over time</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-teal-400 mr-3 mt-0.5" />
                  <span>Detailed skill-matrix for objective candidate evaluation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-teal-400 mr-3 mt-0.5" />
                  <span>Integrated video interviews with AI-assisted analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-teal-400 mr-3 mt-0.5" />
                  <span>Full compliance with privacy regulations</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-teal-400 mr-3 mt-0.5" />
                  <span>Enterprise-grade security and data protection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
};

export default BenefitsSection;