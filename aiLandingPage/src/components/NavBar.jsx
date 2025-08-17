import React from "react";

const Navbar = () => {
  return (
    <header className="w-full text-white shadow-lg bg-gradient-to-r from-gray-900 via-black to-gray-800">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    {/* Logo */}
    <div className="text-2xl font-extrabold tracking-tight">
      Neura<span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">AI</span>
    </div>

    {/* Navigation Links */}
    <nav className="hidden md:flex space-x-8 text-sm font-medium">
      <a
        href="#features"
        className="relative hover:text-purple-400 transition before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-purple-500 hover:before:w-full before:transition-all before:duration-300"
      >
        Features
      </a>
      <a
        href="#pricing"
        className="relative hover:text-purple-400 transition before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-purple-500 hover:before:w-full before:transition-all before:duration-300"
      >
        Pricing
      </a>
      <a
        href="#testimonial"
        className="relative hover:text-purple-400 transition before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-purple-500 hover:before:w-full before:transition-all before:duration-300"
      >
        Testimonials
      </a>
      <a
        href="#footer"
        className="relative hover:text-purple-400 transition before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-purple-500 hover:before:w-full before:transition-all before:duration-300"
      >
        Contact
      </a>
    </nav>

    {/* CTA Button */}
    <div className="hidden md:block">
      <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white px-6 py-2 rounded-lg shadow-lg transition transform hover:scale-105">
        Try for Free
      </button>
    </div>
  </div>
</header>

  );
};

export default Navbar;
