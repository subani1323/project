import React from "react";
import {
  FaCalendarAlt,
  FaMoneyBill,
  FaUser,
  FaSearch, // Search Icon
  FaCommentDots,
  FaBolt,
  FaGlobe, // Explore Icon
} from "react-icons/fa";

const Click = () => {
  return (
    <div className="relative   w-full max-w-6xl px-6 mt-[2cm] mx-auto">
      {/* Left Image and Search Bar Section */}
      <div className="flex flex-col md:flex-row mt-8">
        <div className="relative w-full md:w-1/2 overflow-hidden rounded-[20px] mb-8 md:mb-0 md:mr-12">
          {/* Image with Overlay Text */}
          <img
            src="/girl.jpeg" // Replace with your image path
            alt="Descriptive Alt Text"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] p-4"
            style={{
              bottom: "0",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark background for readability
              color: "white",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <p className="text-xs">
              Embark on a journey to find your dream destination, where
              adventure and relaxation await, creating unforgettable memories
              along the way.
            </p>
          </div>
          <div
            className="absolute bottom-[2.5cm] left-1/2 transform -translate-x-1/2 w-[90%] h-[1.5cm] flex items-center justify-between"
            style={{
              backgroundColor: "rgba(225, 225, 225, 0.3)",
              borderRadius: "50px",
            }}
          >
            <div className="w-full h-full flex items-center justify-between px-4">
              {/* Date Section */}
              <div className="flex items-center text-white">
                <FaCalendarAlt className="mr-2" />
                <span className="mr-2">Date</span>
                <select className="border-none outline-none bg-transparent text-white">
                  {/* Options here */}
                </select>
              </div>
              {/* Vertical Line */}
              <div className="h-6 w-px bg-white mx-2"></div>
              {/* Budget Section */}
              <div className="flex items-center text-white">
                <FaMoneyBill className="mr-2" />
                <span className="mr-2">Budget</span>
                <select className="border-none outline-none bg-transparent text-white">
                  {/* Options here */}
                </select>
              </div>
              {/* Vertical Line */}
              <div className="h-6 w-px bg-white mx-2"></div>
              {/* Guest Section */}
              <div className="flex items-center text-white">
                <FaUser className="mr-2" />
                <span className="mr-2">Guests</span>
                <select className="border-none outline-none bg-transparent text-white">
                  {/* Options here */}
                </select>
              </div>
              {/* Search Button */}
              <button className="bg-white text-black rounded-full px-4 py-1 ml-2">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Right Section: How it Works */}
        <div className="w-full md:w-1/2">
          <p className="text-gray-500 text-lg">How it works</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            One Click for You
          </h1>
          {/* Steps Section */}
          <div className="space-y-4">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-start group hover:bg-white hover:shadow-lg p-4 rounded-md transition-all duration-200">
              <div className="p-2 bg-white group-hover:bg-gray-200 rounded-full mr-4 transition-all duration-200">
                <FaSearch className="text-black" />
              </div>
              <div>
                <h2 className="font-bold text-xl">Find your destination</h2>
                <p className="text-gray-500">
                  Embark on a journey to discover your dream destination, where
                  adventure and relaxation await.
                </p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-start group hover:bg-white hover:shadow-lg p-4 rounded-md transition-all duration-200">
              <div className="p-2 bg-white group-hover:bg-gray-200 rounded-full mr-4 transition-all duration-200">
                <FaCommentDots className="text-black" />
              </div>
              <div>
                <h2 className="font-bold text-xl">Book a ticket</h2>
                <p className="text-gray-500">
                  Ensure a smooth travel experience by booking tickets to your
                  preferred destination via our booking platform.
                </p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-start group hover:bg-white hover:shadow-lg p-4 rounded-md transition-all duration-200">
              <div className="p-2 bg-white group-hover:bg-gray-200 rounded-full mr-4 transition-all duration-200">
                <FaBolt className="text-black" />
              </div>
              <div>
                <h2 className="font-bold text-xl">Make Payment</h2>
                <p className="text-gray-500">
                  We offer a variety of payment options to meet your preferences
                  and ensure a hassle-free transaction process.
                </p>
              </div>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-start group hover:bg-white hover:shadow-lg p-4 rounded-md transition-all duration-200">
              <div className="p-2 bg-white group-hover:bg-gray-200 rounded-full mr-4 transition-all duration-200">
                <FaGlobe className="text-black" /> {/* Explore Icon */}
              </div>
              <div>
                <h2 className="font-bold text-xl">Explore destination</h2>
                <p className="text-gray-500">
                  You'll be immersed in a captivating tapestry of sights,
                  sounds, and tastes, as you wind your way through the ancient
                  streets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Click;
