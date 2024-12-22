"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { RxCross1 } from "react-icons/rx"; 
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const pathName = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }
  };

  const toggleFeaturesDropdown = () => {
    setIsFeaturesOpen((prev) => !prev);
  };

  const toggleSolutionsDropdown = () => {
    setIsSolutionsOpen((prev) => !prev);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 via-white to-pink-50">
      {/* Brand Logo */}
      <div className="text-red-700 text-2xl font-bold">
        <span className="text-black">R</span>Max
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <Link href="/" className="text-black hover:text-red-500">
          Home
        </Link>

        {/* Features Dropdown */}
        <div className="relative">
          <button
            className="flex items-center space-x-2 text-black hover:text-red-500"
            onClick={toggleFeaturesDropdown}
          >
            <span>Features</span>
            {isFeaturesOpen ? (
              <ChevronUpIcon className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDownIcon className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {isFeaturesOpen && (
            <div className="absolute top-10 left-0 bg-white shadow-lg rounded-md w-64 p-4 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-black">Discover</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>Custom Branded Website</li>
                  <li>User Mobile App</li>
                  <li>Business Webpage</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black">Manage</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>Courses</li>
                  <li>Classes</li>
                  <li>Appointments</li>
                  <li>Services</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black">Grow</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>AI Marketing Tool</li>
                  <li>Social Media Integration</li>
                  <li>CRM</li>
                </ul>
              </div>

              <button className="w-full bg-red-500 text-white py-2 mt-4 rounded-md hover:bg-red-600">
                Show All Features
              </button>
            </div>
          )}
        </div>

        <Link href="/pages/pricing" className="text-black hover:text-red-500">
          Pricing
        </Link>

        {/* Solutions Dropdown */}
        <div className="relative">
          <button
            className="flex items-center space-x-2 text-black hover:text-red-500"
            onClick={toggleSolutionsDropdown}
          >
            <span>Solutions</span>
            {isSolutionsOpen ? (
              <ChevronUpIcon className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDownIcon className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {isSolutionsOpen && (
            <div className="absolute top-10 left-0 bg-white shadow-lg rounded-md w-64 p-4 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-black">Provided Solutions</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>Open Docs</li>
                  <li>Buy Plans</li>
                  <li>Read Docs</li>
                </ul>
              </div>

              <button className="w-full bg-red-500 text-white py-2 mt-4 rounded-md hover:bg-red-600">
                Show All Solutions
              </button>
            </div>
          )}
        </div>

        <Link
          href="/Login"
          className="px-4 py-2 border border-gray-400 rounded-md text-black bg-white hover:bg-gray-100"
        >
          Login
        </Link>
        <Link
          href="/Checkout"
          className="px-4 py-2 rounded-md text-white bg-red-500 hover:bg-red-600"
        >
          Try For Free
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          className="text-3xl text-black"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          &#9776;
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 w-full bg-black z-50 flex flex-col items-center justify-center space-y-6 text-white font-bold text-2xl p-4 transform transition-transform duration-300 ease-in-out">
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <RxCross1 />
          </button>

          <Link
            href="/"
            className={`hover:text-orange-200 ${pathName === "/" ? "text-orange-200" : ""}`}
          >
            Home
          </Link>

          {/* Features Dropdown for Mobile */}
          <div className="relative">
            <button
              className="flex items-center space-x-2 text-white hover:text-orange-200"
              onClick={toggleFeaturesDropdown}
            >
              <span>Features</span>
              {isFeaturesOpen ? (
                <ChevronUpIcon className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDownIcon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {isFeaturesOpen && (
              <div className="bg-white shadow-lg rounded-md p-4 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-black">Discover</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>Custom Branded Website</li>
                    <li>User Mobile App</li>
                    <li>Business Webpage</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black">Manage</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>Courses</li>
                    <li>Classes</li>
                    <li>Appointments</li>
                    <li>Services</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black">Grow</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>AI Marketing Tool</li>
                    <li>Social Media Integration</li>
                    <li>CRM</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/pages/pricing"
            className={`hover:text-orange-200 ${pathName === "/pages/pricing" ? "text-orange-200" : ""}`}
          >
            Pricing
          </Link>

          {/* Solutions Dropdown for Mobile */}
          <div className="relative">
            <button
              className="flex items-center space-x-2 text-white hover:text-orange-200"
              onClick={toggleSolutionsDropdown}
            >
              <span>Solutions</span>
              {isSolutionsOpen ? (
                <ChevronUpIcon className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDownIcon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {isSolutionsOpen && (
              <div className="bg-white shadow-lg rounded-md p-4 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-black">Provided Solutions</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>Open Docs</li>
                    <li>Buy Plans</li>
                    <li>Read Docs</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/Login"
            className="px-4 py-2 border border-gray-400 rounded-md text-white bg-black hover:bg-gray-100"
          >
            Login
          </Link>

          <Link
            href="/Checkout"
            className="px-4 py-2 rounded-md text-white bg-red-500 hover:bg-red-600"
          >
            Try For Free
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
