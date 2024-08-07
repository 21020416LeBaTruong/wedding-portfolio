import React from "react";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <div>
      <div className='grid grid-cols-12 p-10 bg-gray-100'>
        <div className='col-span-1' />
        <div className="col-span-12 md:col-span-4">
          <h1 className="pb-5">I will be with you in your special day!</h1>
          <div className="flex space-x-5">
            <FaFacebook />
            <FaInstagramSquare />
          </div>
        </div>
        <div className="flex flex-col col-span-12 md:col-span-2 mt-5 md:mt-0">
          <h1 className="font-bold pb-2">Page</h1>
          <Link to="aboutme" smooth={true} duration={1000} className="cursor-pointer">
            <span>About me</span>
          </Link>
          <Link to="colab" smooth={true} duration={1000} className="cursor-pointer">
            <span>Colaborators</span>
          </Link>
          <Link to="feedback" smooth={true} duration={1000} className="cursor-pointer">
            <span>Feedback</span>
          </Link>
          <Link to="highlight" smooth={true} duration={1000} className="cursor-pointer">
            <span>Highlight</span>
          </Link>
        </div>
        <div className="flex flex-col col-span-12 md:col-span-2 mt-5 md:mt-0">
          <h1 className="font-bold pb-2">Service</h1>
          <span>Car</span>
          <span>Flower</span>
          <span>MC</span>
          <span>Decoration</span>
        </div>
        <div className="flex flex-col col-span-12 md:col-span-2 mt-5 md:mt-0">
          <h1 className="font-bold pb-2">Contact</h1>
          <span>Sdt: 0948972983</span>
          <span>Mail: mcjosquang@gmail.com</span>
          <span>FB: Jos Trần Đức Quang</span>
          <span>IG: Josinlove</span>
        </div>
        <div className='col-span-1' />
      </div>
    </div>
  );
}
