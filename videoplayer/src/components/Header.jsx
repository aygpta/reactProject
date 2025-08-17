import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      alert(`Search for: ${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <header className="bg-white shadow-md p-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
       <Link to="/" className="flex items-center space-x-2">
        <div className="bg-red-600 rounded-[6px] p-1 flex items-center justify-center w-10 h-6 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-5 h-5 ml-1"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <span className="text-xl font-bold text-gray-900 select-none">MyTube</span>
      </Link>


        <form 
          onSubmit={handleSearch} 
          className="flex flex-grow max-w-xl mx-4"
          >
          <input
            type="text"
            placeholder="Search"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-red-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button 
            type="submit" 
            className="bg-gray-100 border border-gray-300 px-4 rounded-r-full hover:bg-gray-200"
          >
            🔍
          </button>
        </form>

        <div className="flex items-center space-x-4 text-gray-700">
          <button className="hover:bg-gray-200 p-2 rounded-full transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" 
                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                 className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M12 19v-14M5 12h14"/>
            </svg>
          </button>

          <button className="hover:bg-gray-200 p-2 rounded-full transition relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" 
                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                 className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
            <span className="absolute top-1 right-1 bg-red-600 rounded-full w-2 h-2"></span>
          </button>

          <button className="hover:bg-gray-200 p-1 rounded-full transition">
            <img 
              src="https://randomuser.me/api/portraits/men/75.jpg" 
              alt="User Avatar" 
              className="w-8 h-8 rounded-full"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
