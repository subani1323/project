import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaMoneyBill,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Home = () => {
  const [selectedLang, setSelectedLang] = useState("En");
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center rounded-2xl"
      style={{
        backgroundImage: "url('/mountain3.jpeg')",
        margin: "0.3cm",
      }}
    >
      <nav className="flex justify-between items-center p-5 relative z-10">
        {/* Mobile Menu Icon */}
        <div
          className="block lg:hidden text-white text-2xl z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Logo */}
        <div className="text-white text-2xl font-bold ml-4 lg:ml-8">
          INDOTRAVI
        </div>

        {/* Side Menu for Mobile */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-gray-900 text-white z-20 p-5 transform transition-transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
        >
          {["About", "Services", "Tour", "Contact"].map((link) => (
            <a
              href={`#${link.toLowerCase()}`}
              key={link}
              onClick={() => {
                setActiveLink(link);
                setIsMenuOpen(false);
              }}
              className={`block py-2 text-lg ${
                activeLink === link ? "bg-white text-black" : ""
              } rounded-lg mb-2`}
            >
              {link}
            </a>
          ))}
          <div className="mt-8">
            <div className="flex justify-between">
              <button
                onClick={() => setSelectedLang("De")}
                className={`${
                  selectedLang === "De" ? "bg-white text-black" : "text-white"
                } px-4 py-2 rounded-full`}
              >
                De
              </button>
              <button
                onClick={() => setSelectedLang("En")}
                className={`${
                  selectedLang === "En" ? "bg-white text-black" : "text-white"
                } px-4 py-2 rounded-full`}
              >
                En
              </button>
            </div>
            <button className="mt-4 bg-white text-black w-full py-2 rounded-full">
              Login
            </button>
          </div>
        </div>

        {/* Navbar Links for Desktop */}
        <div
          className={`hidden lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 p-2 rounded-full`}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            marginLeft: "2cm",
            marginRight: "2cm",
          }}
        >
          {["About", "Services", "Tour", "Contact"].map((link) => (
            <a
              href={`#${link.toLowerCase()}`}
              key={link}
              onClick={() => setActiveLink(link)}
              className={`text-white p-2 rounded-full ${
                activeLink === link ? "shadow-lg" : ""
              } hover:font-bold`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Language and Login Buttons for Desktop */}
        <div className="hidden lg:flex space-x-4 items-center ml-auto lg:ml-0">
          <div
            className="flex space-x-2 p-2 rounded-full"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <button
              onClick={() => setSelectedLang("De")}
              className={`${
                selectedLang === "De" ? "bg-white text-black" : "text-white"
              } px-4 py-2 rounded-full`}
            >
              De
            </button>
            <button
              onClick={() => setSelectedLang("En")}
              className={`${
                selectedLang === "En" ? "bg-white text-black" : "text-white"
              } px-4 py-2 rounded-full`}
            >
              En
            </button>
          </div>
          <button className="bg-white text-black border border-white rounded-full px-4 py-2 lg:px-8 lg:py-3">
            Login
          </button>
        </div>
      </nav>

      <div className="absolute inset-x-0 top-1/4 flex flex-col items-center justify-center text-center px-4 md:px-0">
        <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-normal mb-4">
          Extraordinary natural
          <br />
          and cultural charm
        </h1>
        <p className="text-white text-lg md:text-2xl lg:text-3xl mt-2">
          Exploring Indonesia is an unforgettable adventure
        </p>
      </div>

      {/* New Container with Background Color */}
      <div
        className="absolute top-[calc(100vh-10cm)] md:top-[calc(100vh-6cm)] left-1/2 -translate-x-1/2 w-full max-w-4xl p-4 md:rounded-full rounded-lg px-2 grid sm:grid-cols-4 grid-cols-1 gap-4"
        style={{
          backgroundColor: "rgba(225, 225, 225, 0.2)",
        }}
      >
        {/* Date Section */}
        <div className="flex items-center justify-center">
          <FaCalendarAlt className="text-white mr-4" />
          <span className="text-white mr-4">Date</span>
          <select className="border-none outline-none bg-transparent text-white">
            {/* Options here */}
          </select>
        </div>

        {/* Budget Section */}
        <div className="flex items-center justify-center">
          <FaMoneyBill className="text-white mr-4" />
          <span className="text-white mr-4">Budget</span>
          <select className="border-none outline-none bg-transparent text-white">
            {/* Options here */}
          </select>
        </div>

        {/* Guest Section */}
        <div className="flex items-center justify-center">
          <FaUser className="text-white mr-4" />
          <span className="text-white mr-4">Guests</span>
          <select className="border-none outline-none bg-transparent text-white">
            {/* Options here */}
          </select>
        </div>

        {/* Space Button */}
        <button className="bg-white text-black rounded-full px-6 py-2">
          Search
        </button>
      </div>

      {/* New Containers Section Below Search Bar */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 top-[90vh] max-md:hidden"
        // Adjusted height for mobile and desktop
      >
        <div
          className="bg-white bg-opacity-100 p-4 rounded-2xl shadow-2xl w-40 h-32 md:w-60 md:h-40 flex flex-col items-center justify-center"
          style={{ marginRight: "1.5cm" }}
        >
          <h2 className="text-black text-3xl md:text-4xl font-semibold">
            10M+
          </h2>
          <p className="text-gray-400 text-center mt-2 text-sm md:text-lg">
            Total Customers
          </p>
        </div>
        <div
          className="bg-white bg-opacity-100 p-4 rounded-2xl shadow-2xl w-40 h-32 md:w-60 md:h-40 flex flex-col items-center justify-center"
          style={{ marginRight: "1.5cm" }}
        >
          <h2 className="text-black text-3xl md:text-4xl font-semibold">09+</h2>
          <p className="text-gray-400 text-center mt-2 text-sm md:text-lg">
            Years of experience
          </p>
        </div>
        <div
          className="bg-white bg-opacity-100 p-4 rounded-2xl shadow-2xl w-40 h-32 md:w-60 md:h-40 flex flex-col items-center justify-center"
          style={{ marginRight: "1.5cm" }}
        >
          <h2 className="text-black text-3xl md:text-4xl font-semibold">12k</h2>
          <p className="text-gray-400 text-center mt-2 text-sm md:text-lg">
            Total destinations
          </p>
        </div>
        <div className="bg-white bg-opacity-100 p-4 rounded-2xl shadow-2xl w-40 h-32 md:w-60 md:h-40 flex flex-col items-center justify-center">
          <h2 className="text-black text-3xl md:text-4xl font-semibold">5.0</h2>
          <p className="text-gray-400 text-center mt-2 text-sm md:text-lg">
            Average Rating
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
