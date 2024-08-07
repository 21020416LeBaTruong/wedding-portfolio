import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../img/logo.png';
import { Link } from "react-scroll";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex justify-between items-center p-2">
        <h1 className="font-bold text-white text-3xl">LOGO</h1>
        <div className={`flex-col text-xl text-white md:flex md:flex-row space-x-0 md:space-x-10 ${isOpen ? 'flex justify-center' : 'hidden'}`}>
          <Link to="home" smooth={true} duration={1000} className="cursor-pointer">
            <button className="p-2 hover:underline">Home</button>
          </Link>
          <Link to="service" smooth={true} duration={1000} className="cursor-pointer">
            <button className="p-2 hover:underline">Services</button>
          </Link>
          <button className="p-2 hover:underline">Contact me</button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
}
