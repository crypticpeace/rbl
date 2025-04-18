import React from 'react';
import { Sun, Menu } from 'lucide-react'; // Import icons from lucide-react

const Navbar = () => {
  return (
    <nav className="bg-blue-900 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          {/* Logo and Primary Links */}
          <div className="flex space-x-4">
            {/* Logo */}
            <div className="flex items-center py-4">
              <Sun className="h-6 w-6 mr-2 text-white" />
              <span className="font-bold text-white text-xl">Dhyana</span>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="home" className="py-4 px-3 text-blue-100 hover:text-white transition duration-300">
                Home
              </a>
              <a href="about" className="py-4 px-3 text-blue-100 hover:text-white transition duration-300">
                About
              </a>
              <a href="contact" className="py-4 px-3 text-blue-100 hover:text-white transition duration-300">
                Contact
              </a>
            </div>
          </div>

          {/* Secondary Nav Links */}
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="login"
              className="py-2 px-3 bg-blue-700 hover:bg-blue-800 text-white rounded transition duration-300"
            >
              Login
            </a>
            <a
              href="signup"
              className="py-2 px-3 bg-blue-700 hover:bg-blue-800 text-white rounded transition duration-300"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;