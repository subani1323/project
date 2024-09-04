import React from "react";

const Destination = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center w-full max-w-[95%] px-6 py-20 mx-auto">
      {/* Content Section */}
      <div className="flex flex-col my-20 w=[90%] md:flex-row justify-between items-start mb-12">
        {/* Left Side Content */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <p className="text-gray-600 text-xl md:text-2xl mb-4">
            Tour Packages
          </p>
          <h2 className="text-black text-3xl md:text-5xl font-semibold">
            Our tourist destinations
          </h2>
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center mt-6 md:mt-0">
          <p className="text-gray-600 text-lg md:text-xl text-center md:text-left">
            Our tourist destinations offer an unrivaled blend of natural beauty
            and cultural richness.
          </p>
        </div>
      </div>

      {/* Images Section */}
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full md:justify-center items-center">
        {/* Image 1 */}
        <div className="relative rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300 w-full md:w-1/4 h-[350px] sm:h-[550px]">
          <img
            src="destination.jpeg"
            alt="Destination 1"
            className="w-full h-full object-cover filter brightness-110"
          />
          <div className="absolute top-4 left-4 bg-gray-600 bg-opacity-40 text-white text-sm px-3 py-1 rounded-2xl">
            7 Days
          </div>
          <div className="absolute top-4 right-4 bg-gray-600 bg-opacity-40 text-sm px-3 py-1 rounded-2xl flex items-center">
            <span className="text-yellow-400 mr-2">★</span>
            <span className="text-white">4.9</span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 bg-gray-700 bg-opacity-50 backdrop-blur-md px-4 py-2 rounded-md flex justify-between items-center">
            <div>
              <p className="text-white text-sm">23 August - 29 August</p>
              <h3 className="font-semibold text-lg text-white">
                Bali Tour Package
              </h3>
            </div>
            <div className="text-white text-lg font-bold">$285</div>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300 w-full md:w-1/4 h-[350px] sm:h-[550px]">
          <img
            src="java.jpeg"
            alt="Destination 2"
            className="w-full h-full object-cover filter brightness-110"
          />
          <div className="absolute top-4 left-4 bg-gray-600 bg-opacity-40 text-white text-sm px-3 py-1 rounded-2xl">
            5 Days
          </div>
          <div className="absolute top-4 right-4 bg-gray-600 bg-opacity-40 text-sm px-3 py-1 rounded-2xl flex items-center">
            <span className="text-yellow-400 mr-2">★</span>
            <span className="text-white">4.9</span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 bg-gray-700 bg-opacity-50 backdrop-blur-md px-4 py-2 rounded-md flex justify-between items-center">
            <div>
              <p className="text-white text-sm">23 August - 27 August</p>
              <h3 className="font-semibold text-lg text-white">
                Java Tour Package
              </h3>
            </div>
            <div className="text-white text-lg font-bold">$218</div>
          </div>
        </div>

        {/* Image 3 */}
        <div className="relative rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300 w-full md:w-1/4 h-[350px] sm:h-[550px]">
          <img
            src="solo.jpeg"
            alt="Destination 3"
            className="w-full h-full object-cover filter brightness-110"
          />
          <div className="absolute top-4 left-4 bg-gray-600 bg-opacity-40 text-white text-sm px-3 py-1 rounded-2xl">
            3 Days
          </div>
          <div className="absolute top-4 right-4 bg-gray-600 bg-opacity-40 text-sm px-3 py-1 rounded-2xl flex items-center">
            <span className="text-yellow-400 mr-2">★</span>
            <span className="text-white">4.9</span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 bg-gray-700 bg-opacity-50 backdrop-blur-md px-4 py-2 rounded-md flex justify-between items-center">
            <div>
              <p className="text-white text-sm">23 August - 25 August</p>
              <h3 className="font-semibold text-lg text-white">
                Solo Tour Package
              </h3>
            </div>
            <div className="text-white text-lg font-bold">$163</div>
          </div>
        </div>
      </div>

      {/* View More Button */}
      <div className="mt-8 flex justify-center w-full">
        <button className="bg-black text-white py-3 px-6 rounded-full w-full max-w-xs md:max-w-sm hover:bg-gray-800 transition">
          View more
        </button>
      </div>
    </div>
  );
};

export default Destination;
