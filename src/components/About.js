import React from "react";

const About = () => {
  return (
    <div className="relative flex flex-col md:flex-row justify-between items-start w-full max-w-6xl px-4 md:px-6 sm:pt-40 pt-10 mx-auto">
      {/* Left Side Content */}
      <div className="w-full md:w-1/2 mb-2 md:mb-0">
        <p className="text-gray-400 text-xl md:text-2xl mb-1 md:mb-2">
          Best Location
        </p>
        <h2 className="text-black text-3xl md:text-5xl font-semibold">
          Indonesian Tourism
        </h2>
      </div>

      {/* Right Side Content */}
      <div className="w-full md:w-1/2 flex items-center mt-6 md:mt-0">
        <p className="text-gray-400 text-base md:text-xl">
          Extraordinary natural beauty, enjoy the rich culture, and experience
          the friendliness of the local people.
        </p>
      </div>
    </div>
  );
};

export default About;
