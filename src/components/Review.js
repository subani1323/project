import React from "react";

const Review = () => {
  return (
    <div
      className="flex h-full items-center justify-center p-10 mb-5" // Adjusting the section position
    >
      <div className="flex flex-col md:flex-row items-start w-full max-w-4xl space-y-8 md:space-y-0 md:space-x-16">
        {/* Profile Section */}
        <div className="flex flex-col md:w-1/3 space-y-6 items-center">
          <div className="flex items-center space-x-4">
            <img
              src="review.jpeg" // Replace with the actual image URL
              alt="Donald Sullivan"
              className="w-24 h-24 rounded-full object-cover"
            />
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold">Donald Sullivan</h3>
              <p className="text-sm text-gray-500">Founder Fiko</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex space-x-4 justify-center mt-8 md:mt-0">
            <button className="text-gray-500 hover:text-black transition">
              <span className="text-5xl">←</span> {/* Increased arrow size */}
            </button>
            <button className="text-gray-500 hover:text-black transition">
              <span className="text-5xl">→</span> {/* Increased arrow size */}
            </button>
          </div>
        </div>

        {/* Review Text Section */}
        <div className="flex-1 relative">
          <span
            className="absolute text-[8rem] text-gray-200"
            style={{
              left: "-0.7rem",
              top: "0.5rem",
              lineHeight: "0.5",
              zIndex: "-1",
            }}
          >
            “
          </span>
          <blockquote className="text-gray-600 text-lg relative z-10">
            {/* The apostrophe is positioned behind the blockquote */}
            This travel website is very informative and easy to use. I like how
            they present various destination options and travel packages with
            clear details. Offering pictures and destination descriptions helps
            me decide where I want to visit. Additionally, the ability to
            compare prices and reviews from other users is very helpful in
            decision making.
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Review;
