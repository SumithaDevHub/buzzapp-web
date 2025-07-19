import React from 'react';
import { Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-20 overflow-hidden bg-gradient-to-b from-purple-200 via-purple-100 to-white">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[32rem] h-[32rem] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
        <div className="absolute left-1/4 bottom-6 w-44 h-44 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="w-full max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2 leading-tight">
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            BuzzApp
          </span>
        </h1>
        <p className="text-lg font-medium text-gray-700 mb-2">
          Untangle your mind, one vibe at a time
        </p>
        <p className="text-sm text-gray-600 mb-4 max-w-xl mx-auto">
          A beautiful, private mental wellness companion that helps you understand your emotions,
          reflect on your thoughts, and track your emotional journey with personalized guidance.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-6">
          {/* Download Button */}
          <a
            href="/buzzapp.apk"
            download
            className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-2xl font-semibold text-base shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download APK
          </a>

          {/* QR Image */}
          <div className="flex flex-col items-center">
            <img
              src="./public/qr-buzzapp.png"
              alt="Download BuzzApp QR"
              className="w-32 h-32 rounded-xl shadow-lg hover:scale-105 transition-transform"
            />
            <p className="text-xs text-gray-500 mt-2">Scan to Download</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
