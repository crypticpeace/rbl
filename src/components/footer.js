import React from 'react';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-white font-bold text-xl mb-4">Dhyana</h3>
            <p className="mb-4">Ancient wisdom for modern wellness</p>

            <div className="flex space-x-4">
              <a href="https://example.com" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="https://example.com" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="https://example.com" className="text-gray-300 hover:text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul>
                <li className="mb-2"><a href="https://example.com" className="text-gray-300 hover:text-white">Articles</a></li>
                <li className="mb-2"><a href="https://example.com" className="text-gray-300 hover:text-white">Sacred Texts</a></li>
                <li className="mb-2"><a href="https://example.com" className="text-gray-300 hover:text-white">Meditation Guides</a></li>
                <li className="mb-2"><a href="https://example.com" className="text-gray-300 hover:text-white">Ayurvedic Recipes</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul>
                <li className="mb-2"><a href="https://example.com" className="text-gray-300 hover:text-white">Online Sessions</a></li>
                <li className="mb-2"><a href="https://example.com" className="text-gray-300 hover:text-white">Spiritual Music</a></li>
                <li className="mb-2"><a href="https://example.com" className="text-gray-300 hover:text-white">Wellness Programs</a></li>
                <li className="mb-2"><a href="https://example.com" className="text-gray-300 hover:text-white">Retreats</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul>
                <li className="mb-2 flex items-center">
                  <Phone size={16} className="mr-2" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="mb-2 flex items-center">
                  <Mail size={16} className="mr-2" />
                  <span>info@dhyana.com</span>
                </li>
                <li className="mb-2 flex items-center">
                  <MapPin size={16} className="mr-2" />
                  <span>Rishikesh, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Dhyana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

