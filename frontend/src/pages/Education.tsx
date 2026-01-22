import React from 'react';

const Education: React.FC = () => {
  const brideEducation = [
    {
      level: "Primary School",
      institution: "Lincoln Elementary School",
      location: "San Francisco, CA",
      years: "2001 - 2007",
      description: "Where Sarah discovered her love for art and creativity"
    },
    {
      level: "Secondary School",
      institution: "San Francisco High School",
      location: "San Francisco, CA", 
      years: "2007 - 2011",
      description: "Excelled in art classes and was the yearbook designer"
    },
    {
      level: "University",
      institution: "Academy of Art University",
      location: "San Francisco, CA",
      years: "2011 - 2015",
      description: "Bachelor of Fine Arts in Graphic Design, graduated with honors"
    }
  ];

  const groomEducation = [
    {
      level: "Primary School",
      institution: "Oakwood Elementary School",
      location: "Los Angeles, CA",
      years: "2000 - 2006",
      description: "Where Michael developed his passion for technology and problem-solving"
    },
    {
      level: "Secondary School", 
      institution: "Los Angeles Technical High School",
      location: "Los Angeles, CA",
      years: "2006 - 2010",
      description: "Computer club president and robotics team lead"
    },
    {
      level: "University",
      institution: "Stanford University",
      location: "Stanford, CA",
      years: "2010 - 2014",
      description: "Bachelor of Science in Computer Science, graduated with distinction"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-elegant text-center text-gray-800 mb-16">
          Education Background
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bride Education */}
          <div>
            <h2 className="text-3xl font-elegant text-wedding-rose mb-8 text-center">
              Sarah's Education Journey
            </h2>
            <div className="space-y-6">
              {brideEducation.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-wedding-rose hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{edu.level}</h3>
                      <p className="text-lg text-wedding-rose font-medium">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">{edu.years}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">📍 {edu.location}</p>
                  <p className="text-gray-700 italic">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Groom Education */}
          <div>
            <h2 className="text-3xl font-elegant text-wedding-sky mb-8 text-center">
              Michael's Education Journey
            </h2>
            <div className="space-y-6">
              {groomEducation.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-wedding-sky hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{edu.level}</h3>
                      <p className="text-lg text-wedding-sky font-medium">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">{edu.years}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">📍 {edu.location}</p>
                  <p className="text-gray-700 italic">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Shared Values Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-wedding-cream to-wedding-lavender rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-elegant text-gray-800 mb-6">
              Education & Shared Values
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Both Sarah and Michael believe in the power of education and lifelong learning. 
              Their diverse educational backgrounds - Sarah in the arts and Michael in technology - 
              complement each other perfectly. They continue to support each other's professional 
              growth and share a passion for learning new things together, whether it's Sarah learning 
              to code or Michael exploring digital photography.
            </p>
            <div className="mt-8 flex justify-center space-x-8">
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <span className="text-3xl">🎨</span>
                <p className="text-sm text-gray-600 mt-2">Creativity</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <span className="text-3xl">💻</span>
                <p className="text-sm text-gray-600 mt-2">Technology</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <span className="text-3xl">📚</span>
                <p className="text-sm text-gray-600 mt-2">Learning</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <span className="text-3xl">🌟</span>
                <p className="text-sm text-gray-600 mt-2">Growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
