import React from 'react';
import { Rainbow, Edit3, TrendingUp, Heart, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Rainbow,
    title: 'Gain emotional clarity',
    description: 'Understand your feelings with guided emotion recognition and definitions.',
   
  },
  {
    icon: Edit3,
    title: 'Reflect instead of react',
    description: 'Take time to process your emotions through thoughtful journaling prompts.',
    
  },
  {
    icon: TrendingUp,
    title: 'Track your emotional journey',
    description: 'Monitor your progress and see patterns in your emotional wellbeing over time.',
    
  },
  {
    icon: Heart,
    title: 'Boost your mental health with minimal effort',
    description: 'Simple daily practices that make a meaningful impact on your wellness.',
   
  },
  {
    icon: Shield,
    title: 'Simple, beautiful, and private',
    description: 'Your data stays on your device. Beautiful design meets complete privacy.',
   
  },
];

const Benefits = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Why Use <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">BuzzApp?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your relationship with your emotions through mindful reflection and tracking
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-gray-100 hover:border-purple-200"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

       
      </div>
    </section>
  );
};

export default Benefits;