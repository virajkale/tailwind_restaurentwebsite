import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative h-screen bg-cover bg-center w-full bg-accent "
      style={{ backgroundImage: `url(${assets.heroImg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 "></div>
      <div className="container mx-auto px-6 h-full flex items-center z-10 relative">
        <div className="text-white max-w-2xl">
          <h2 className="font-bold text-5xl mb-4 ">Experience Fine Dining</h2>
          <p className="mb-8 text-xl ">
            Indulge in our exquisite culinary creations crafted with passion and
            the finest ingredients.
          </p>
          <a
            href="#reservation"
            className="bg-primary rounded-full font-bold px-8 py-3 text-white hover:bg-red-800  cursor-pointer transition duration-300 transform hover:scale-105"
          >
            Book a table
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
