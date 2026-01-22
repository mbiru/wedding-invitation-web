import React, { useState } from 'react';

const AddFamily: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    relationship: 'Father',
    bio: '',
    brideOrGroom: 'bride',
    photo: null as File | null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const relationships = ['Father', 'Mother', 'Brother', 'Sister', 'Grandfather', 'Grandmother', 'Uncle', 'Aunt', 'Cousin', 'Other'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        photo: e.target.files![0]
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('relationship', formData.relationship);
      formDataToSend.append('bio', formData.bio);
      formDataToSend.append('brideOrGroom', formData.brideOrGroom);
      
      if (formData.photo) {
        formDataToSend.append('photo', formData.photo);
      }

      // API call would go here
      // const response = await fetch('/api/family', {
      //   method: 'POST',
      //   body: formDataToSend
      // });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setMessage('Family member added successfully!');
      setFormData({
        name: '',
        relationship: 'Father',
        bio: '',
        brideOrGroom: 'bride',
        photo: null
      });
    } catch (error) {
      setMessage('Error adding family member. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-elegant text-center text-gray-800 mb-8">
          Add Family Member
        </h1>
        
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-wedding-cream rounded-xl focus:outline-none focus:border-wedding-rose transition-colors duration-200"
                placeholder="Enter full name"
              />
            </div>

            {/* Bride or Groom Selection */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Belongs to *
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="relative">
                  <input
                    type="radio"
                    name="brideOrGroom"
                    value="bride"
                    checked={formData.brideOrGroom === 'bride'}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="px-4 py-3 border-2 border-wedding-cream rounded-xl cursor-pointer text-center peer-checked:border-wedding-rose peer-checked:bg-wedding-pink transition-all duration-200">
                    👰 Bride's Family
                  </div>
                </label>
                <label className="relative">
                  <input
                    type="radio"
                    name="brideOrGroom"
                    value="groom"
                    checked={formData.brideOrGroom === 'groom'}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="px-4 py-3 border-2 border-wedding-cream rounded-xl cursor-pointer text-center peer-checked:border-wedding-sky peer-checked:bg-wedding-sky transition-all duration-200">
                    🤵 Groom's Family
                  </div>
                </label>
              </div>
            </div>

            {/* Relationship Field */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Relationship *
              </label>
              <select
                name="relationship"
                value={formData.relationship}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-wedding-cream rounded-xl focus:outline-none focus:border-wedding-rose transition-colors duration-200"
              >
                {relationships.map(rel => (
                  <option key={rel} value={rel}>{rel}</option>
                ))}
              </select>
            </div>

            {/* Bio Field */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Biography *
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border-2 border-wedding-cream rounded-xl focus:outline-none focus:border-wedding-rose transition-colors duration-200 resize-none"
                placeholder="Tell us about this family member..."
              />
            </div>

            {/* Photo Upload */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Photo (Optional)
              </label>
              <div className="relative">
                <input
                  type="file"
                  name="photo"
                  onChange={handleFileChange}
                  accept="image/*"
                  className="w-full px-4 py-3 border-2 border-wedding-cream rounded-xl focus:outline-none focus:border-wedding-rose transition-colors duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-wedding-rose file:text-white hover:file:bg-wedding-pink"
                />
              </div>
              {formData.photo && (
                <div className="mt-2 text-sm text-gray-600">
                  Selected: {formData.photo.name}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-wedding-rose to-wedding-pink text-white font-semibold py-4 rounded-xl hover:from-wedding-pink hover:to-wedding-rose transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                {isSubmitting ? 'Adding Family Member...' : 'Add Family Member'}
              </button>
            </div>
          </form>

          {/* Message Display */}
          {message && (
            <div className={`mt-6 p-4 rounded-xl text-center ${
              message.includes('success') 
                ? 'bg-green-100 text-green-700 border-2 border-green-300' 
                : 'bg-red-100 text-red-700 border-2 border-red-300'
            }`}>
              {message}
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-wedding-cream rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Instructions:</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-wedding-rose mr-2">•</span>
              Fill in all required fields marked with *
            </li>
            <li className="flex items-start">
              <span className="text-wedding-rose mr-2">•</span>
              Upload a clear photo of the family member (optional)
            </li>
            <li className="flex items-start">
              <span className="text-wedding-rose mr-2">•</span>
              Write a brief biography highlighting their personality and relationship
            </li>
            <li className="flex items-start">
              <span className="text-wedding-rose mr-2">•</span>
              Click submit to add the family member to the website
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddFamily;
