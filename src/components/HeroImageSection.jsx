import React from "react";
import profileImg from "../assets/IMG20250302135012.jpg";

const HeroImageSection = () => {
  return (
    <section className="relative flex items-center justify-between min-h-screen px-10 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Left Text Content */}
      <div className="max-w-xl space-y-6 z-20">
        <h1 className="text-5xl font-bold leading-tight">
          Hi, I’m <span className="text-blue-400">Rajashekar</span>
        </h1>
        <p className="text-lg text-gray-300">
          A passionate <span className="text-blue-400">Web Developer</span> who
          loves creating modern, responsive, and creative user experiences.
        </p>
        <button className="mt-6 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold shadow-lg transition-transform duration-300 hover:scale-105">
          Explore My Work
        </button>
      </div>

      {/* Right Profile Image */}
      <div className="relative w-[400px] h-[450px] z-10">
        {/* Background Decorative Cards */}
        <div className="absolute -top-6 -left-8 w-full h-full rounded-3xl border-2 border-gray-600 transform rotate-12"></div>
        <div className="absolute top-4 left-4 w-full h-full rounded-3xl bg-gradient-to-tr from-blue-600 to-purple-600 transform -rotate-6 shadow-xl"></div>

        {/* Main Image */}
        <img
          src={profileImg}
          alt="Profile"
          className="relative z-10 rounded-3xl object-cover w-full h-full shadow-2xl"
        />
      </div>

      {/* Floating Shapes / Icons */}
      <div className="absolute top-20 left-10 text-gray-600 text-4xl">〰️</div>
      <div className="absolute bottom-20 left-32 text-gray-600 text-3xl">△</div>
      <div className="absolute top-16 right-32 text-gray-600 text-5xl">○</div>
      <div className="absolute bottom-16 right-16 text-gray-600 text-3xl">＋</div>
    </section>
  );
};

export default HeroImageSection;
