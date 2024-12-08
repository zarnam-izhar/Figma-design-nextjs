
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlinePerson } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md relative">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo with "Furniro" */}
        <div className="logo">
          <Image src="/logo1.jpg" alt="Store Logo" width={200} height={50} className="h-12" />
        </div>

        {/* Hamburger Button */}
        <button
          className="block md:hidden text-gray-700 focus:outline-none"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            console.log("Menu Open:", isMenuOpen);
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Navbar Links - Desktop */}
        <nav className="hidden md:flex md:space-x-8">
          <Link href="/" className="text-black font-semibold hover:text-yellow-300">Home</Link>
          <Link href="/shop" className="text-black font-semibold hover:text-yellow-300">Shop</Link>
          <Link href="/blog" className="text-black font-semibold hover:text-yellow-300">Blog</Link>
          <Link href="/contact" className="text-black font-semibold hover:text-yellow-300">Contact</Link>
        </nav>

        {/* Icons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <MdOutlinePerson className="text-gray-700 w-5 h-5 hover:text-yellow-300 cursor-pointer" />
          <CiSearch className="text-gray-700 w-5 h-5 hover:text-yellow-300 cursor-pointer" />
          <IoIosHeartEmpty className="text-gray-700 w-5 h-5 hover:text-yellow-300 cursor-pointer" />
          <Link href="/cart">
            <AiOutlineShoppingCart className="text-gray-700 w-5 h-5 hover:text-yellow-300 cursor-pointer" />
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-[80px] right-4 w-40 bg-white shadow-lg rounded-md py-2 z-50">
            <nav className="flex flex-col space-y-2 px-4">
              <Link href="/" className="text-black font-semibold hover:text-yellow-300">Home</Link>
              <Link href="/shop" className="text-black font-semibold hover:text-yellow-300">Shop</Link>
              <Link href="/blog" className="text-black font-semibold hover:text-yellow-300">Blog</Link>
              <Link href="/contact" className="text-black font-semibold hover:text-yellow-300">Contact</Link>
            </nav>
            <div className="mt-4 px-4 flex justify-between">
              <MdOutlinePerson className="text-gray-700 w-5 h-5 hover:text-yellow-300 cursor-pointer" />
              <CiSearch className="text-gray-700 w-5 h-5 hover:text-yellow-300 cursor-pointer" />
              <IoIosHeartEmpty className="text-gray-700 w-5 h-5 hover:text-yellow-300 cursor-pointer" />
              <Link href="/cart">
                <AiOutlineShoppingCart className="text-gray-700 w-5 h-5 hover:text-yellow-300 cursor-pointer" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
