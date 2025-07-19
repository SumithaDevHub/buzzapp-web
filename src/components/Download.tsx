// import React from 'react';
import { Download as DownloadIcon, Smartphone, Star } from 'lucide-react';

const Download = () => {
  return (
    <section id='' className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Download <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">BuzzApp</span>
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Start your emotional wellness journey today. Available for Android devices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Download Options */}
          <div className="space-y-8">
            {/* App Download Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Get the App</h3>

              {/* Direct Download */}
              <div className="space-y-4">
                <a
                  href="/buzzapp.apk"
                  download
                  className="w-full block bg-white text-gray-900 px-6 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <DownloadIcon className="w-6 h-6 group-hover:animate-bounce" />
                  Download APK (Direct)
                </a>

                {/* Divider */}
                <div className="flex items-center gap-4 text-sm text-purple-200">
                  <div className="flex-1 h-px bg-purple-300/30"></div>
                  <span>or</span>
                  <div className="flex-1 h-px bg-purple-300/30"></div>
                </div>

                {/* QR Code Section */}
                <div className="text-center">
                  <a href="https://sumithadevhub.github.io/buzzapp-web" target="_blank" rel="noopener noreferrer">
                    <div className="w-32 h-32 bg-white rounded-2xl mx-auto mb-4 overflow-hidden shadow-lg hover:scale-105 transition-transform">
                      <img
                      

                        src={`${import.meta.env.BASE_URL}qr-buzzapp.png`}

                        alt="Scan QR to download BuzzApp"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </a>
                  <p className="text-purple-200">Scan with your phone to download</p>
                </div>
              </div>

              {/* GitHub Link */}
              <div className="mt-8 text-center">
                <a
                  href="https://github.com/SumithaDevHub/buzzapp-codebase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-gray-900 hover:bg-gray-800 rounded-xl text-white font-medium transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M12 0a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.35-1.75-1.35-1.75-1.1-.75.09-.74.09-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.84 2.83 1.31 3.52 1 .11-.79.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.25-3.22-.13-.31-.54-1.54.12-3.2 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0C17 4.26 18 4.58 18 4.58c.66 1.66.25 2.89.12 3.2.78.84 1.25 1.91 1.25 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.3c0 .32.21.7.82.58A12 12 0 0012 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  View App Code on GitHub
                </a>
              </div>
            </div>

            {/* App Info Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h4 className="text-xl font-bold mb-4">App Details</h4>
              <div className="space-y-3 text-purple-100">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5" />
                  <span>Android</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 text-center">📱</span>
                  <span>Size: ~77 MB</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 fill-current text-yellow-400" />
                  <span>100% Free & Private</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-144 bg-gray-800 rounded-[3.5rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-b from-purple-100 to-blue-100 rounded-[3rem] overflow-hidden">
                  <div className="p-8 text-center text-gray-800">
                    <h3 className="text-2xl font-bold mb-4">BuzzApp</h3>
                    <p className="text-gray-600 mb-8">Your emotional wellness companion</p>

                    <div className="space-y-4">
                      <div className="h-12 bg-purple-200 rounded-xl flex items-center justify-center">
                        <span className="text-purple-700 font-medium">Reflect on Mood</span>
                      </div>
                      <div className="h-12 bg-blue-200 rounded-xl flex items-center justify-center">
                        <span className="text-blue-700 font-medium">View Logs</span>
                      </div>
                      <div className="h-12 bg-indigo-200 rounded-xl flex items-center justify-center">
                        <span className="text-indigo-700 font-medium">Learn More</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-xl">✨</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-xl">💝</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
