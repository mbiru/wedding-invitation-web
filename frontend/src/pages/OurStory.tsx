import React from 'react';

const OurStory: React.FC = () => {
  const timelineEvents = [
    {
      id: 1,
      title: "First Meeting",
      date: "March 10, 2022",
      description: "Sarah and Michael met at a friend's art gallery opening in San Francisco. Sarah was showcasing her photography work, and Michael was immediately captivated by both her art and her smile.",
      icon: "🎨"
    },
    {
      id: 2,
      title: "First Date",
      date: "March 18, 2022",
      description: "Their first date was at a cozy Italian restaurant in North Beach. They talked for hours about art, technology, travel, and their dreams. Michael knew this was the beginning of something special.",
      icon: "🍝"
    },
    {
      id: 3,
      title: "First Trip Together",
      date: "June 15, 2022",
      description: "They took their first trip to Napa Valley. Sarah loved the beautiful landscapes, and Michael enjoyed the wine tasting. It was on this trip that they both realized they were falling in love.",
      icon: "🍷"
    },
    {
      id: 4,
      title: "Moving In Together",
      date: "December 1, 2022",
      description: "They decided to take the next step and moved into their first apartment together in San Francisco. Creating a home together was an amazing experience.",
      icon: "🏠"
    },
    {
      id: 5,
      title: "The Proposal",
      date: "December 25, 2023",
      description: "Michael proposed on Christmas morning during a romantic getaway to Lake Tahoe. He arranged for a private dinner by the lake, got down on one knee, and asked Sarah to be his wife. She said yes through tears of joy!",
      icon: "💍"
    },
    {
      id: 6,
      title: "Engagement Party",
      date: "January 20, 2024",
      description: "They celebrated their engagement with friends and family at a beautiful garden party. Everyone was so excited for their upcoming wedding.",
      icon: "🎉"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-elegant text-center text-gray-800 mb-8">
          Our Love Story
        </h1>
        <p className="text-center text-lg text-gray-700 mb-16">
          Every love story is beautiful, but ours is our favorite. Here's how we got here...
        </p>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-wedding-rose"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-wedding-rose rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                  <span className="text-white text-xs">{event.id}</span>
                </div>

                {/* Event Card */}
                <div
                  className={`w-5/12 bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300 ${
                    index % 2 === 0 ? 'mr-auto' : 'ml-auto'
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{event.icon}</span>
                    <div>
                      <h3 className="text-xl font-elegant text-gray-800">{event.title}</h3>
                      <p className="text-sm text-wedding-rose">{event.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-wedding-pink to-wedding-lavender rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-elegant mb-6">The Next Chapter</h2>
            <p className="text-lg leading-relaxed mb-8">
              As we prepare to say "I do," we're excited for all the adventures that await us. 
              From building our dream home to traveling the world together, we can't wait to create 
              countless more memories as husband and wife.
            </p>
            <div className="text-4xl animate-pulse">
              💑 🏡 ✈️ 👶
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
