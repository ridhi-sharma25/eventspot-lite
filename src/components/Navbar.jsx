import React from 'react';
import { Search } from 'lucide-react';

const Navbar = ({ onSearch }) => {
  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">EventSpot Lite</h1>
        <div className="relative flex items-center">
          <Search className="absolute left-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search events..."
            className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
