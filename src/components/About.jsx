import React from "react";
import { assets } from "../assets/assets";
import { FaUtensils, FaWineGlass } from "react-icons/fa";
const About = () => {
  return (
    <div id="about" className="py-20 bg-white ">
      <div className="container mx-auto px-6 ">
        <div className="text-center mb-12">
          <h1 className=" text-3xl md:text-4xl mb-4 text-dark font-bold ">
            Our Story
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* left side image */}
          <div className="md:w-1/2">
            <img
              src={assets.aboutImg}
              className="rounded-xl object-cover w-full h-full"
            />
          </div>
          {/* texft */}
          <div className="md:w-1/2">
            <h3 className="text-3xl font-semibold mb-8 text-dark">
              A Culinary Journey
            </h3>
            <p className="mb-6 text-gray-700">
              Founded in 2010, Fork & Flame brings together world-class chefs
              and sommeliers to create an unforgettable dining experience. Our
              philosophy is simple: exceptional food, impeccable service, and a
              warm atmosphere.
            </p>
            <p className="mb-6 text-gray-700">
              We source our ingredients from local farmers and producers,
              ensuring the freshest seasonal dishes that celebrate the region's
              bounty while supporting our community.
            </p>
            {/* button section */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex justify-center items-center">
                  {" "}
                  <FaUtensils />
                </div>
                <span className="font-semibold text-dark"> Fine Dining</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaWineGlass />
                </div>
                <span className="font-semibold  text-dark"> Wine Pairing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
