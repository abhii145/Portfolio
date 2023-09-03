import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import headerLogo from "../assets/icon/headerLogo.svg";

const NavTbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" p-4">
      <div className="flex items-center justify-between">
        <img
          alt="Flowbite Logo"
          src={headerLogo}
          className="h-12"
          onClick={() => {
            window.location.href = "/";
          }}
        />
        <button className="text-gray-700 md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className="hidden md:flex space-x-4">
          <a href="#home" className="text-gray-700 pr-4 pl-3 py-2 text-2xl">
            Home
          </a>
          <a href="#aboutme" className="text-gray-700 pr-4 pl-3 py-2 text-2xl">
            About me
          </a>
          <a href="#experience" className="text-gray-700 pr-4 pl-3 py-2 text-2xl">
            Experience
          </a>
          <a href="#project" className="text-gray-700 pr-4 pl-3 py-2 text-2xl">
            Project
          </a>
          <a href="#contact" className="text-gray-700 pr-4 pl-3 py-2 text-2xl">
            Contact
          </a>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <a
            href="#home"
            className="block mt-2 pr-4 pl-3 py-2 border-b text-gray-700 border-gray-100 text-xl"
          >
            Home
          </a>
          <a
            href="#aboutme"
            className="block mt-2 pr-4 pl-3 py-2 text-gray-700 border-b border-gray-100 text-xl"
          >
            About me
          </a>
          <a href="#experience" className="block mt-2 pr-4 pl-3 py-2 text-gray-700 border-b border-gray-100 text-xl">
            Experience
          </a>
          <a
            href="#project"
            className="block mt-2 pr-4 pl-3 py-2 text-gray-700 border-b border-gray-100 text-xl"
          >
            Project
          </a>
          <a
            href="#contact"
            className="block mt-2 pr-4 pl-3 py-2 text-gray-700 border-b border-gray-100 text-xl"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavTbar;
