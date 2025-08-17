import React from "react";
import TextType from "../AnimationLogic/TextType";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="overflow-hidden h-[90vh] flex items-center justify-center bg-gradient-to-r from-purple-900 via-black to-indigo-900">
  <div className="text-white text-center py-24 px-4 flex flex-col items-center">
    {/* Logo / Tagline */}
    <div className="text-center mb-5 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full w-fit flex justify-center items-center gap-2 shadow-lg border border-white/20">
      <div className="h-2 w-2 bg-purple-500 animate-pulse rounded-full"></div>
      <p className="tracking-wide font-semibold">NeuraAI</p>
    </div>

    {/* Heading */}
    <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight">
      Your Futuristic AI Assistant For <br /> 
      <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        <Typewriter
          words={["Writing.", "Planning.", "Thinking.", "Creating."]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={60}
          delaySpeed={1000}
        />
      </span>
    </h1>

    {/* Sub Text */}
    <p className="text-lg max-w-xl mx-auto mb-10 text-gray-300">
      NeuraAI empowers you to create smarter, plan faster, and think bigger — 
      bringing productivity and creativity together.
    </p>

    {/* Buttons */}
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white cursor-pointer px-7 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform">
        Try NeuraAI for Free
      </button>
      <button className="text-white border border-purple-400 cursor-pointer px-7 py-3 rounded-xl hover:bg-purple-500 hover:text-white hover:shadow-lg transition">
        Watch Demo
      </button>
    </div>
  </div>
</div>

  );
};

export default Hero;
