import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMailBulk,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid gird-cols-1 md:grid-cols-4 gap-8">
          {/* first colum */}
          <div>
            <h1 className="font-semibold text-2xl mb-4">
              Fork & <span className="text-primary">Flame</span>
            </h1>
            <p>
              Experience the finest culinary journey in the heart of the city.
            </p>
          </div>

          {/* first colum */}
          <div>
            <h1 className="font-semibold text-2xl mb-4 text-dark">
              Quick Links
            </h1>
            <div className="">
              <ul className="space-y-3 text-dark ">
                <li>
                  <a href="#home" className="cursor-pointer">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="cursor-pointer">
                    About
                  </a>
                </li>
                <li>
                  <a href="#menu" className="cursor-pointer">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#reservation" className="cursor-pointer">
                    Reservation
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* first colum */}
          <div>
            <h1 className="font-semibold text-2xl mb-4 text-dark">
              Contact Info
            </h1>
            <p className="mb-2">123 Gourmet Street, NY 10001</p>
            <p className="mb-2">(123) 456-7890</p>
            <p>info@forkandflame.com</p>
          </div>

          {/* first colum */}
          <div>
            <h1 className="font-semibold text-2xl mb-4 text-dark">Follow Us</h1>
            <div className="flex item-center gap-4 mb-6">
              <div className="rounded-full  bg-primary w-10 h-10 flex items-center justify-center">
                <FaFacebook className="text-white text-2xl" />
              </div>
              <div className="rounded-full  bg-primary w-10 h-10 flex items-center justify-center">
                <FaTwitter className="text-white text-2xl" />
              </div>
              <div className="rounded-full  bg-primary w-10 h-10 flex items-center justify-center">
                <FaLinkedin className="text-white text-2xl" />
              </div>
              <div className="rounded-full  bg-primary w-10 h-10 flex items-center justify-center">
                <FaInstagram className="text-white text-2xl" />
              </div>
            </div>
            <div>
              <h2 className="font-bold mb-4">Subscribe to newsletter</h2>
              <div className="flex border border-primary rounded">
                <input
                  className="w-full px-4 py-2 rounded outline-none placeholder:text-xs"
                  placeholder="Enter Your Email "
                  type="email"
                />
                <button className="bg-primary border-1 px-4 py-2 cursor-pointer rounded-r text-white">
                  <FaLocationArrow />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t py-4 mt-6 border-gray-300"><p className="text-center text-gray-400">© 2025 Fork&Flame. All rights reserved.</p></div>
      </div>
    </div>
  );
};

export default Footer;
