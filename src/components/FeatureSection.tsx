import React, { useState } from 'react';
import { Brain, Target, Video } from 'lucide-react';

type FeatureCardProps = {
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
  expandedDescription: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, label, title, description, expandedDescription }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="space-y-6">
        <div className="text-blue-600 font-bold uppercase tracking-wide text-sm">
          {label}
        </div>
        <div className="bg-blue-50 p-4 rounded-xl w-fit">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600">
          {isHovered ? expandedDescription : description}
        </p>
      </div>
      
      <div className={`absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-xl transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  );
};

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      label: "Match",
      title: "AI-Powered Matching",
      description: "Our proprietary algorithm analyzes thousands of data points to match you with perfect candidates.",
      expandedDescription: "Using advanced machine learning, we analyze over 50+ data points per candidate to ensure perfect role alignment, reducing time-to-hire by 60% on average."
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      label: "Assess",
      title: "Skill-Matrix Ratings",
      description: "Every candidate is pre-vetted and scored on a comprehensive skill matrix.",
      expandedDescription: "Our 12-point skill assessment framework combines technical evaluations, soft skills, and cultural fit metrics to give you a complete candidate profile."
    },
    {
      icon: <Video className="h-8 w-8 text-blue-600" />,
      label: "Interview",
      title: "Hybrid Interview Booths",
      description: "Schedule and conduct interviews seamlessly with our integrated video platform.",
      expandedDescription: "Our all-in-one interview platform includes AI note-taking, automated scoring, and collaborative feedback tools to streamline your hiring process."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Recruiters Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform is built by recruiters, for recruiters. We understand your challenges and designed solutions that work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              label={feature.label}
              title={feature.title}
              description={feature.description}
              expandedDescription={feature.expandedDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;