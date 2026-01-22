import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-wedding-pink via-wedding-cream to-wedding-lavender opacity-80"></div>
        
        <div className="relative z-10 text-center px-4">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-elegant text-white mb-4 animate-pulse">
              Sarah & Michael
            </h1>
            <div className="text-3xl md:text-4xl text-wedding-rose font-light mb-8">
              Are Getting Married
            </div>
          </div>
          
          <div className="bg-white bg-opacity-90 rounded-3xl p-8 max-w-2xl mx-auto shadow-2xl backdrop-blur-sm">
            <div className="text-2xl font-elegant text-gray-800 mb-4">
              📅 June 15, 2024
            </div>
            <div className="text-xl text-gray-700 mb-6">
              📍 Garden Estate, Beverly Hills
            </div>
            <div className="text-lg text-gray-600 italic">
              "Two souls, one heart, walking together in the journey of love"
            </div>
          </div>
          
          <div className="mt-12 animate-bounce">
            <div className="text-wedding-gold text-4xl">
              ↓
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-elegant text-gray-800 mb-8">
            Welcome to Our Wedding Celebration
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            We are so excited to celebrate our special day with you! This website is our way of sharing 
            our love story, memories, and all the wedding details with our dear friends and family. 
            Join us as we embark on this beautiful journey together.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="text-4xl mb-4">💕</div>
              <h3 className="text-xl font-elegant text-gray-800 mb-2">Our Love Story</h3>
              <p className="text-gray-600">From first meeting to forever</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-elegant text-gray-800 mb-2">Celebration</h3>
              <p className="text-gray-600">Join us for the celebration</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-xl font-elegant text-gray-800 mb-2">Memories</h3>
              <p className="text-gray-600">Cherishing every moment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Countdown Section */}
      <div className="py-20 bg-white bg-opacity-80">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-elegant text-gray-800 mb-8">
            Wedding Countdown
          </h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-wedding-rose rounded-xl p-4">
              <div className="text-3xl font-bold text-white">150</div>
              <div className="text-sm text-white">Days</div>
            </div>
            <div className="bg-wedding-lavender rounded-xl p-4">
              <div className="text-3xl font-bold text-white">12</div>
              <div className="text-sm text-white">Hours</div>
            </div>
            <div className="bg-wedding-sky rounded-xl p-4">
              <div className="text-3xl font-bold text-white">45</div>
              <div className="text-sm text-white">Minutes</div>
            </div>
            <div className="bg-wedding-gold rounded-xl p-4">
              <div className="text-3xl font-bold text-white">30</div>
              <div className="text-sm text-white">Seconds</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
