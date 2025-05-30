import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FAQItemProps = {
  question: string;
  answer: React.ReactNode;
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        {isOpen ? 
          <ChevronUp className="h-5 w-5 text-blue-600" /> : 
          <ChevronDown className="h-5 w-5 text-gray-600" />
        }
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "How does the AI matching algorithm work?",
      answer: (
        <p>
          Our AI algorithm analyzes hundreds of data points from both job descriptions and candidate profiles. 
          It looks beyond keywords to understand context, skills, experience levels, and even company culture fit. 
          The system continuously learns from hiring decisions to improve match quality over time.
        </p>
      )
    },
    {
      question: "Can Vetlyhire integrate with our existing ATS?",
      answer: (
        <>
          <p>
            Yes! Vetlyhire integrates seamlessly with all major Applicant Tracking Systems including Workday, 
            Greenhouse, Lever, and many more. We offer both standard API connections and custom integration services 
            for enterprise clients.
          </p>
          <p className="mt-2">
            Our team will help you set up the integration during onboarding to ensure a smooth workflow.
          </p>
        </>
      )
    },
    {
      question: "How secure is our data on your platform?",
      answer: (
        <p>
          Security is our top priority. Vetlyhire is SOC 2 Type II certified and GDPR compliant. 
          We use enterprise-grade encryption for all data, both in transit and at rest. 
          Our platform undergoes regular security audits and penetration testing. 
          You maintain full ownership of your data, and we never share it with third parties.
        </p>
      )
    },
    {
      question: "What kind of support do you offer?",
      answer: (
        <p>
          All plans include email support with a 24-hour response guarantee. Professional plans add priority 
          support with a 4-hour response time during business hours. Enterprise clients receive a dedicated 
          account manager and technical support team available via phone, email, and chat with custom SLAs.
        </p>
      )
    },
    {
      question: "Is there a limit to how many candidates I can match?",
      answer: (
        <p>
          Free trial accounts can match up to 50 candidates. Professional plans include 500 candidate matches per month, 
          with options to purchase additional capacity if needed. Enterprise plans offer custom volume pricing based on 
          your specific recruiting needs. Unused matches do not roll over to the following month.
        </p>
      )
    },
    {
      question: "Can we customize the skill assessment tests?",
      answer: (
        <p>
          Yes! Professional plans allow you to customize existing assessment templates. Enterprise plans offer fully 
          custom assessment creation with our team's assistance, including role-specific technical evaluations, 
          personality assessments, and scenario-based testing. All assessments can be branded with your company logo and colors.
        </p>
      )
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Vetlyhire. Can't find the answer you're looking for? 
            <a href="#" className="text-blue-600 font-medium ml-1">Contact our support team</a>.
          </p>
        </div>
        
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;