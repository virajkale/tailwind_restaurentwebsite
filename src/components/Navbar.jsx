import React, { useState } from "react";
import { FaBars, FaServer } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import logo from "../assets/logo.png";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="shadow-md sticky top-0 z-50 backdrop-blur-3xl">
      <div className="container mx-auto px-6 sm-px-8 md:px-12 lg:px-24">
        <div className="flex justify-between items-center py-8">
          {/* logo */}
          <div className="flex items-center text-3xl font-bold">
            <img className="w-12 h-12" src={logo} alt="" />
            <h1 className="text-primary">
              Fork& <span className="text-accent">Flame</span>
            </h1>
          </div>
          {/* menu */}
          <nav className="hidden md:flex items-center space-x-6 text-dark  cursor-pointer">
            <a
              className="font-semibold cursor-pointer hover:text-primary"
              href="#home"
            >
              Home
            </a>
            <a
              className="font-semibold cursor-pointer hover:text-primary"
              href="#about"
            >
              About
            </a>
            <a
              className="font-semibold cursor-pointer hover:text-primary"
              href="#menu"
            >
              Menu
            </a>
            <a
              className="font-semibold cursor-pointer hover:text-primary"
              href="#reservation"
            >
              Reservation
            </a>
            <a
              className="font-semibold cursor-pointer hover:text-primary"
              href="#contact"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Version */}
          <div className="md:hidden z-20">
            {showMenu ? (
              <FaXmark
                className="text-dark text-xl cursor-pointer"
                onClick={() => setShowMenu(!showMenu)}
              />
            ) : (
              <FaBars
                className="text-dark text-xl cursor-pointer"
                onClick={() => setShowMenu(!showMenu)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile menus */}

      {showMenu && (
        <div
          className="md:hidden flex flex-col items-center  space-y-6 
  font-semibold text-accent  h-screen py-20 bg-white  top-0 right-0 "
        >
          <a
            className="font-semibold cursor-pointer hover:text-primary"
            href="#home"
            onClick={() => setShowMenu(!showMenu)}
          >
            Home
          </a>
          <a
            className="font-semibold cursor-pointer hover:text-primary"
            href="#about"
            onClick={() => setShowMenu(!showMenu)}
          >
            About
          </a>
          <a
            className="font-semibold cursor-pointer hover:text-primary"
            href="#menu"
            onClick={() => setShowMenu(!showMenu)}
          >
            Menu
          </a>
          <a
            className="font-semibold cursor-pointer hover:text-primary"
            href="#reservation"
            onClick={() => setShowMenu(!showMenu)}
          >
            Reservation
          </a>
          <a
            className="font-semibold cursor-pointer hover:text-primary"
            href="#contact"
            onClick={() => setShowMenu(!showMenu)}
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
