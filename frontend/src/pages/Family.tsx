import React from 'react';

const Family: React.FC = () => {
  const brideFamily = [
    {
      name: "Robert Johnson",
      relationship: "Father",
      bio: "Retired architect with a passion for classical music and woodworking. Taught Sarah the importance of attention to detail and creative thinking.",
      photo: "👨"
    },
    {
      name: "Emily Johnson",
      relationship: "Mother", 
      bio: "Elementary school teacher and amazing cook. Sarah's biggest supporter and role model for kindness and compassion.",
      photo: "👩"
    },
    {
      name: "David Johnson",
      relationship: "Brother",
      bio: "Software engineer living in Seattle. Always there for Sarah with tech advice and brotherly wisdom.",
      photo: "👦"
    },
    {
      name: "Lisa Johnson",
      relationship: "Sister",
      bio: "Wedding planner based in San Francisco. Helping Sarah plan the perfect wedding with professional expertise.",
      photo: "👧"
    }
  ];

  const groomFamily = [
    {
      name: "James Chen",
      relationship: "Father",
      bio: "Successful businessman and community leader. Instilled in Michael the values of hard work and integrity.",
      photo: "👨"
    },
    {
      name: "Margaret Chen", 
      relationship: "Mother",
      bio: "Nurse practitioner and yoga instructor. Taught Michael the importance of health, mindfulness, and caring for others.",
      photo: "👩"
    },
    {
      name: "Daniel Chen",
      relationship: "Brother",
      bio: "Medical resident in Boston. Michael's older brother and closest confidant since childhood.",
      photo: "👦"
    },
    {
      name: "Sophia Chen",
      relationship: "Sister",
      bio: "Fashion designer in New York. Always keeping Michael updated on the latest trends and style.",
      photo: "👧"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-elegant text-center text-gray-800 mb-16">
          Our Families
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bride's Family */}
          <div>
            <h2 className="text-3xl font-elegant text-wedding-rose mb-8 text-center">
              Sarah's Family
            </h2>
            <div className="space-y-6">
              {brideFamily.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-5xl bg-wedding-pink rounded-full p-3">
                      {member.photo}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                      <p className="text-wedding-rose font-medium">{member.relationship}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Groom's Family */}
          <div>
            <h2 className="text-3xl font-elegant text-wedding-sky mb-8 text-center">
              Michael's Family
            </h2>
            <div className="space-y-6">
              {groomFamily.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-5xl bg-wedding-sky rounded-full p-3">
                      {member.photo}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                      <p className="text-wedding-sky font-medium">{member.relationship}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Family Values Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-wedding-pink via-wedding-cream to-wedding-sky rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-elegant text-gray-800 mb-6">
              Family Values & Traditions
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
              Both families share core values of love, respect, education, and community service. 
              The Johnsons and Chens are excited to come together as one family, blending their 
              traditions and creating new ones. From Sunday family dinners to holiday celebrations, 
              they look forward to many joyful gatherings in the years to come.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <span className="text-4xl mb-3 block">❤️</span>
                <h3 className="font-semibold text-gray-800 mb-2">Love</h3>
                <p className="text-sm text-gray-600">Unconditional support and care</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <span className="text-4xl mb-3 block">🤝</span>
                <h3 className="font-semibold text-gray-800 mb-2">Unity</h3>
                <p className="text-sm text-gray-600">Standing together as one</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <span className="text-4xl mb-3 block">🎓</span>
                <h3 className="font-semibold text-gray-800 mb-2">Education</h3>
                <p className="text-sm text-gray-600">Lifelong learning and growth</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <span className="text-4xl mb-3 block">🌍</span>
                <h3 className="font-semibold text-gray-800 mb-2">Service</h3>
                <p className="text-sm text-gray-600">Giving back to community</p>
              </div>
            </div>
          </div>
        </div>

        {/* Family Photo Gallery */}
        <div className="mt-20">
          <h2 className="text-3xl font-elegant text-center text-gray-800 mb-8">
            Family Memories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="bg-gradient-to-br from-wedding-pink to-wedding-lavender rounded-xl h-40 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <span className="text-white text-2xl font-semibold">Photo {item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Family;
