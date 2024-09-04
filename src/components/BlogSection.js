import React from "react";

const BlogSection = () => {
  return (
    <div className="flex flex-col h-full items-center py-10 px-4 md:px-0">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-lg md:text-xl text-gray-400">Our Blog</p>
        <h2 className="text-4xl md:text-6xl font-semibold text-gray-800">
          Our travel memories
        </h2>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <img
            src="her.jpeg" // Replace with the actual image URL
            alt="Travel Trends"
            className="w-full h-48 md:h-60 object-cover" // Adjusted image height for mobile
          />
          <div className="p-4">
            <p className="text-gray-400 text-xs mb-2">Nov 14, 2022</p>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              2023 Travel Trends – what you need to know
            </h3>
            <p className="text-gray-400 text-sm md:text-md">
              2023 taught us valuable life lessons. Plans don’t always work out,
              flexibility in life is key, a...
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <img
            src="jeep.jpeg" // Replace with the actual image URL
            alt="Jeep Adventure"
            className="w-full h-48 md:h-60 object-cover" // Adjusted image height for mobile
          />
          <div className="p-4">
            <p className="text-gray-400 text-xs mb-2">Nov 18, 2022</p>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              Jeep Adventure is a new attraction for tourists visiting Garut
            </h3>
            <p className="text-gray-400 text-sm md:text-md">
              Jeep Adventure is one of the tourist attractions that has been
              popular recently. The sensation...
            </p>
          </div>
        </div>
      </div>

      {/* View More Button */}
      <div className="mt-8 flex justify-center w-full">
        <button className="bg-black text-white py-3 rounded-full w-full max-w-xs md:max-w-sm">
          View more
        </button>
      </div>
    </div>
  );
};

export default BlogSection;
