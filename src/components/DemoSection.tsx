import React, { useState } from 'react';
import Button from './Button';
import { Play, ChevronRight, X } from 'lucide-react';
import { SkillsModal } from './SkillsModal';

const DemoSection: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [showSkillsModal, setShowSkillsModal] = useState(false);
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">See Vetlyhire in Action</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch how our platform helps you find, evaluate, and hire top talent in minutes, not weeks.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {!showVideo ? (
            <div 
              className="relative rounded-xl overflow-hidden shadow-2xl cursor-pointer group"
              onClick={() => setShowVideo(true)}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                <div className="bg-blue-600 rounded-full p-4 shadow-lg group-hover:bg-blue-700 transition-all duration-300">
                  <Play className="h-10 w-10 text-white" fill="white" />
                </div>
              </div>
              <img 
                src="https://images.pexels.com/photos/3194524/pexels-photo-3194524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Demo Video Thumbnail" 
                className="w-full h-auto rounded-xl"
              />
            </div>
          ) : (
            <div className="relative pt-[56.25%] rounded-xl overflow-hidden shadow-2xl">
              {/* This would be replaced with an actual video embed in a real implementation */}
              <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                <p className="text-white text-xl">Video would play here</p>
                <button 
                  className="absolute top-4 right-4 text-white hover:text-gray-300"
                  onClick={() => setShowVideo(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to transform your hiring process?</h3>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
            <Button size="lg" onClick={() => setShowSkillsModal(true)}>
              Book a Live Demo
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              View Case Studies
            </Button>
          </div>
        </div>
      </div>

      <SkillsModal
        isOpen={showSkillsModal}
        onClose={() => setShowSkillsModal(false)}
      />
    </section>
  );
};

export default DemoSection;