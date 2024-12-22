import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-stone-900 text-white py-10 px-5">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 text-center">
          {/* Column 1: Company */}
          <div>
            <h1 className="font-bold text-gray-400 mb-4">Company</h1>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Column 2: Business Size */}
          <div>
            <h1 className="font-bold text-gray-400 mb-4">Business Size</h1>
            <ul className="space-y-2">
              <li>Entrepreneurs</li>
              <li>SMBs</li>
              <li>Growth Businesses</li>
              <li>Household Services</li>
              <li>Enterprise</li>
            </ul>
          </div>

          {/* Column 3: Business Type */}
          <div>
            <h1 className="font-bold text-gray-400 mb-4">Business Type</h1>
            <ul className="space-y-2">
              <li>Health & Wellness</li>
              <li>Sports</li>
              <li>Learning Activities</li>
              <li>Household Services</li>
              <li>Miscellaneous</li>
            </ul>
          </div>

          {/* Column 4: Download */}
          <div>
            <h1 className="font-bold text-gray-400 mb-4">Download</h1>
            <ul className="space-y-2">
              <li className="flex items-center justify-center">
                <FaApple className="mr-2" /> Business App
              </li>
              <li className="flex items-center justify-center">
                <FaApple className="mr-2" /> User App
              </li>
              <li className="flex items-center justify-center">
                <FaGooglePlay className="mr-2" /> Business App
              </li>
              <li className="flex items-center justify-center">
                <FaGooglePlay className="mr-2" /> User App
              </li>
            </ul>
          </div>

          {/* Column 5: Legal */}
          <div>
            <h1 className="font-bold text-gray-400 mb-4">Legal</h1>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Return Policy</li>
            </ul>
          </div>

          {/* Column 6: Contact Us */}
          <div>
            <h1 className="font-bold text-gray-400 mb-4">Contact Us</h1>
            <ul className="space-y-2">
              <li>support@Rmax.com</li>
              <li>+91-8459671235</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center border-t border-gray-600 pt-5">
          {/* Copyright */}
          <p className="text-gray-400 text-center sm:text-left">
            © 2024 Copyright, All Rights Reserved @RMax
          </p>

          {/* Social Icons */}
          <div className="flex space-x-5 mt-4 sm:mt-0">
            <FaTwitter className="text-white cursor-pointer hover:text-blue-400" />
            <FaFacebookF className="text-white cursor-pointer hover:text-blue-600" />
            <FaInstagram className="text-white cursor-pointer hover:text-pink-500" />
            <FaLinkedinIn className="text-white cursor-pointer hover:text-blue-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
