import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white bg-opacity-90 shadow-lg sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-elegant text-wedding-rose font-bold">
              💑 Our Wedding
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-wedding-rose transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              to="/bride-groom"
              className="text-gray-700 hover:text-wedding-rose transition-colors duration-200 font-medium"
            >
              Bride & Groom
            </Link>
            <Link
              to="/our-story"
              className="text-gray-700 hover:text-wedding-rose transition-colors duration-200 font-medium"
            >
              Our Story
            </Link>
            <Link
              to="/education"
              className="text-gray-700 hover:text-wedding-rose transition-colors duration-200 font-medium"
            >
              Education
            </Link>
            <Link
              to="/family"
              className="text-gray-700 hover:text-wedding-rose transition-colors duration-200 font-medium"
            >
              Family
            </Link>
            <Link
              to="/add-family"
              className="text-gray-700 hover:text-wedding-rose transition-colors duration-200 font-medium"
            >
              Add Family
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-wedding-rose focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
