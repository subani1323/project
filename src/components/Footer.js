import React from "react";
import { FaEnvelope, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pb-10 pt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Content (First three columns) */}
          <div className="md:col-span-5 flex flex-col space-y-6">
            <div className="flex flex-col md:flex-row space-y-6 md:space-x-6 md:space-y-0">
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2">About</h3>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white mb-2"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white mb-2"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white mb-2"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white mb-2"
                >
                  Jobs
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white mb-2"
                >
                  In Press
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white mb-2"
                >
                  Gallery
                </a>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2">Support</h3>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white mb-2"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white mb-2"
                >
                  Online Chat
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white mb-2"
                >
                  Whatsapp
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white mb-2"
                >
                  Telegram
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white mb-2"
                >
                  Ticketing
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white mb-2"
                >
                  Call Center
                </a>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2">FAQ</h3>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white mb-2"
                >
                  Account
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white mb-2"
                >
                  Booking
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white mb-2"
                >
                  Payments
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white mb-2"
                >
                  Returns
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white mb-2"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white mb-2"
                >
                  Terms & Condition
                </a>
              </div>
            </div>
          </div>

          {/* Right Content (Newsletter and social media icons) */}
          <div className="md:col-span-7 flex flex-col items-start space-y-6">
            <div className="w-full">
              <h3 className="text-lg font-bold mb-2">Newsletter</h3>
              <p className="text-gray-400 mb-2">
                Don’t miss out on the exciting world of travel - subscribe now
                and embark on a journey of discovery with us.
              </p>
              <div className="relative flex items-center mb-4">
                <input
                  type="email"
                  className="bg-gray-800 text-white w-full rounded-full py-2 px-3 pl-12 pr-20 focus:outline-none focus:ring focus:ring-blue-400"
                  placeholder="Enter your email"
                />
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white rounded-full py-1 px-6 focus:outline-none hover:bg-gray-500">
                  Submit
                </button>
              </div>
              <div className="flex space-x-2 justify-start">
                <a href="#" className="bg-gray-700 rounded-full p-2">
                  <FaInstagram className="text-white" />
                </a>
                <a href="#" className="bg-gray-700 rounded-full p-2">
                  <FaFacebook className="text-white" />
                </a>
                <a href="#" className="bg-gray-700 rounded-full p-2">
                  <FaYoutube className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-4 text-gray-400 text-sm flex justify-center items-center">
          <span>&copy;2023 Indotrav, All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
