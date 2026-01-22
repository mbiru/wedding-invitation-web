import React from 'react';

const BrideGroom: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-elegant text-center text-gray-800 mb-16">
          Bride & Groom
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Bride Section */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="h-80 bg-gradient-to-br from-wedding-pink to-wedding-rose flex items-center justify-center">
              <div className="text-white text-6xl">👰</div>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-elegant text-wedding-rose mb-4">Sarah Johnson</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <span className="font-semibold text-wedding-rose">Date of Birth:</span> March 15, 1995
                </div>
                <div>
                  <span className="font-semibold text-wedding-rose">Hometown:</span> San Francisco, California
                </div>
                <div>
                  <span className="font-semibold text-wedding-rose">Profession:</span> Graphic Designer
                </div>
                <div>
                  <span className="font-semibold text-wedding-rose">Hobbies:</span> Painting, Yoga, Travel
                </div>
              </div>
              <div className="mt-6 p-4 bg-wedding-cream rounded-xl">
                <p className="text-gray-700 italic">
                  "Sarah is a creative soul with a passion for art and design. 
                  Her warm smile and kind heart brighten every room she enters. 
                  She loves exploring new places and capturing moments through her camera."
                </p>
              </div>
            </div>
          </div>

          {/* Groom Section */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="h-80 bg-gradient-to-br from-wedding-sky to-wedding-lavender flex items-center justify-center">
              <div className="text-white text-6xl">🤵</div>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-elegant text-wedding-sky mb-4">Michael Chen</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <span className="font-semibold text-wedding-sky">Date of Birth:</span> July 22, 1994
                </div>
                <div>
                  <span className="font-semibold text-wedding-sky">Hometown:</span> Los Angeles, California
                </div>
                <div>
                  <span className="font-semibold text-wedding-sky">Profession:</span> Software Engineer
                </div>
                <div>
                  <span className="font-semibold text-wedding-sky">Hobbies:</span> Photography, Hiking, Cooking
                </div>
              </div>
              <div className="mt-6 p-4 bg-wedding-cream rounded-xl">
                <p className="text-gray-700 italic">
                  "Michael is a thoughtful and ambitious person with a love for technology 
                  and the outdoors. His adventurous spirit and caring nature make him the perfect 
                  partner for life's journey."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How They Met Section */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-elegant text-gray-800 mb-6">How They Met</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Sarah and Michael met at a friend's art gallery opening in downtown San Francisco. 
              Sarah was showcasing her photography work, while Michael was there supporting his friend. 
              They immediately connected over their shared love for creativity and adventure. 
              What started as a conversation about art and technology quickly blossomed into a beautiful 
              relationship built on mutual respect, laughter, and endless support for each other's dreams.
            </p>
            <div className="mt-8 text-4xl">
              💕 ✨ 🎨 💻
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrideGroom;
