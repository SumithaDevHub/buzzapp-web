import React from 'react';
import { Smartphone, Heart, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          {/* Logo */}
          <div className="flex justify-center items-center gap-3 mb-6">
            
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              BuzzApp
            </span>
          </div>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Untangle your mind, one vibe at a time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">About BuzzApp</h4>
            <p className="text-gray-400 leading-relaxed">
              A private, beautiful mobile app designed to help you understand your emotions, 
              reflect mindfully, and track your mental wellness journey.
            </p>
          </div>

          {/* Features */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Key Features</h4>
            <ul className="text-gray-400 space-y-2">
              <li>• Emotion recognition & definitions</li>
              <li>• Guided reflection journal</li>
              <li>• Progress tracking & insights</li>
              <li>• 100% private & offline</li>
              <li>• Beautiful, intuitive design</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a href="mailto:asr.sumitha@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors duration-300 justify-center md:justify-start">
                <Mail className="w-5 h-5" />
                asr.sumitha@gmail.com
              </a>
              <p className="text-gray-400">
                We'd love to hear your feedback and suggestions!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 mb-4">
            Made with <Heart className="w-4 h-4 text-red-400 inline mx-1" /> for better mental wellness
          </p>
          <p className="text-sm text-gray-500">
            © 2025 BuzzApp. • Privacy-first mental wellness.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;