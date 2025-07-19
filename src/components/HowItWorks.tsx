import React from 'react';

const screenshots = [
  {
    id: 'I',
    image: './screens/screen1.jpg',
    title: 'Home Screen',
    description: 'Access tools to reflect on your mood, see logs, know the story, or send feedback.',
  },
  {
    id: 'II',
    image: './screens/screen2.jpg',
    title: 'Mood Category',
    description: "Choose how you're feeling to get personalized emotional support.",
  },
  {
    id: 'III',
    image: './screens/screen3.jpg',
    title: 'Emotion Definitions',
    description: 'Understand your exact emotion in words and why it matters.',
  },
  {
    id: 'IV',
    image: './screens/screen4.jpg',
    title: 'Reflection Journal',
    description: 'Answer 5 powerful questions to self-reflect. Choose how you feel after.',
  },
  {
    id: 'V',
    image: './screens/screen5.jpg',
    title: 'View Logs',
    description: "Filter and track your reflections over time. See how far you've come.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            How It{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, intuitive steps to better understand and manage your emotional wellbeing
          </p>
        </div>

        {/* Screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screenshots.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative mb-6">
                <div className="w-full h-[28rem] rounded-2xl overflow-hidden border-4 border-gray-100 group-hover:border-purple-200 transition-colors duration-300 bg-white flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
