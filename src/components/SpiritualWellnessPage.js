import React from 'react';
import { Clock, MapPin, Menu, Sun, Music, BookOpen, Leaf, Video, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const SpiritualWellnessPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Navbar */}
      <nav className="bg-blue-900 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* Logo */}
              <div className="flex items-center py-4">
                <Sun className="h-6 w-6 mr-2 text-white" />
                <span className="font-bold text-white text-xl">Dhyana</span>
              </div>
              
              {/* Nav Links */}
              <div className="hidden md:flex items-center space-x-1">
                <a href="#" className="py-4 px-3 text-blue-100 hover:text-white">Home</a>
                <a href="#" className="py-4 px-3 text-blue-100 hover:text-white">About</a>
                <a href="#" className="py-4 px-3 text-blue-100 hover:text-white">Contact</a>
              </div>
            </div>
            
            {/* Secondary Nav Links */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="#" className="py-2 px-3 bg-blue-700 hover:bg-blue-800 text-white rounded transition duration-300">Login</a>
              <a href="#" className="py-2 px-3 bg-blue-700 hover:bg-blue-800 text-white rounded transition duration-300">Sign Up</a>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button">
                <Menu className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-700 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Journey to Inner Peace</h1>
          <p className="text-xl text-blue-100 mb-8">Discover ancient Indian wisdom for modern wellness</p>
          <button className="bg-white text-blue-800 font-bold rounded-full py-3 px-8 shadow-lg hover:shadow-xl transition duration-300">
            Begin Your Journey
          </button>
        </div>
      </div>
      
      {/* Main Category Cards */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Explore Our Offerings</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Spiritual Music Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col h-full border border-gray-100">
            <div className="h-48 bg-blue-800 flex items-center justify-center">
              <Music size={64} className="text-white" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-800 mb-2">आध्यात्मिक संगीत (Spiritual Music)</h3>
              <p className="text-gray-600 mb-4 flex-grow">प्राचीन परंपराओं के राग, भजन और मंत्रों की उपचार शक्ति का अनुभव करें।</p>
              <Link to="/music" className="text-blue-700 hover:text-blue-900 font-semibold">Explore Music &rarr;</Link>
            </div>
          </div>
          
          {/* Stories Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col h-full border border-gray-100">
            <div className="h-48 bg-blue-700 flex items-center justify-center">
              <BookOpen size={64} className="text-white" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-800 mb-2">आध्यात्मिक कहानियाँ (Spiritual Stories)</h3>
              <p className="text-gray-600 mb-4 flex-grow">महाकाव्यों, पुराणों और लोक परंपराओं से ज्ञान की कहानियाँ जो मार्गदर्शन और प्रेरणा देती हैं।</p>
              <a href="#" className="text-blue-700 hover:text-blue-900 font-semibold">Read Stories &rarr;</a>
            </div>
          </div>
          
          {/* Health Related Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col h-full border border-gray-100">
            <div className="h-48 bg-blue-600 flex items-center justify-center">
              <Leaf size={64} className="text-white" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-800 mb-2">आयुर्वेदिक स्वास्थ्य (Ayurvedic Wellness)</h3>
              <p className="text-gray-600 mb-4 flex-grow">संतुलित जीवन और प्राकृतिक उपचार के लिए पारंपरिक स्वास्थ्य पद्धतियाँ।</p>
              <a href="#" className="text-blue-700 hover:text-blue-900 font-semibold">Discover Health &rarr;</a>
            </div>
          </div>
          
          {/* Online Sessions Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col h-full border border-gray-100">
            <div className="h-48 bg-blue-500 flex items-center justify-center">
              <Video size={64} className="text-white" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-800 mb-2">ऑनलाइन सत्र (Online Sessions)</h3>
              <p className="text-gray-600 mb-4 flex-grow">विशेषज्ञ प्रशिक्षकों के साथ लाइव योग, ध्यान और आध्यात्मिक प्रवचन सत्र।</p>
              <a href="#" className="text-blue-700 hover:text-blue-900 font-semibold">Join Sessions &rarr;</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Section */}
      <div className="bg-gradient-to-r from-slate-100 to-blue-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Upcoming Special Event</h2>
              <h3 className="text-xl text-blue-700 mb-4">Sacred Sound Healing Journey</h3>
              <p className="text-gray-700 mb-6">Join our expert sound healers for a transformative experience with traditional Indian instruments including singing bowls, flutes, and tanpura.</p>
              <div className="flex items-center text-gray-600 mb-2">
                <Clock className="h-5 w-5 mr-2 text-blue-700" />
                <span>Sunday, April 12th at 7:00 PM IST</span>
              </div>
              <div className="flex items-center text-gray-600 mb-6">
                <MapPin className="h-5 w-5 mr-2 text-blue-700" />
                <span>Online via Zoom</span>
              </div>
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded transition duration-300">
                Register Now
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-2 rounded-lg shadow-lg">
                <img src="/api/placeholder/600/400" alt="Sound healing instruments" className="rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Community Says</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <span className="text-blue-700 font-bold text-xl">A</span>
              </div>
              <div>
                <h4 className="font-bold">Ananya R.</h4>
                <p className="text-gray-600">Mumbai</p>
              </div>
            </div>
            <p className="text-gray-700">"The guided meditation sessions have transformed my daily routine. I've found a sense of inner calm that helps me navigate my busy life with grace."</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <span className="text-blue-700 font-bold text-xl">R</span>
              </div>
              <div>
                <h4 className="font-bold">Rajesh K.</h4>
                <p className="text-gray-600">Bangalore</p>
              </div>
            </div>
            <p className="text-gray-700">"The Ayurvedic wellness tips have helped me address chronic issues that modern medicine couldn't solve. I feel more balanced and energetic."</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <span className="text-blue-700 font-bold text-xl">P</span>
              </div>
              <div>
                <h4 className="font-bold">Priya S.</h4>
                <p className="text-gray-600">Delhi</p>
              </div>
            </div>
            <p className="text-gray-700">"I've been listening to the bhajan playlist during my morning routine. It sets a peaceful tone for my entire day and connects me to my cultural roots."</p>
          </div>
        </div>
      </div>
      
      {/* Newsletter */}
      <div className="bg-blue-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Spiritual Community</h2>
          <p className="text-blue-100 mb-8">Subscribe to receive weekly wisdom, event notifications and exclusive content</p>
          
          <div className="flex flex-col sm:flex-row sm:justify-center">
            <div className="flex items-center bg-white rounded-l-md px-3 py-3 sm:w-96">
              <Mail className="h-5 w-5 text-blue-700 mr-2" />
              <input 
                className="w-full focus:outline-none text-gray-700" 
                type="email" 
                placeholder="Your email address"
              />
            </div>
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 sm:rounded-l-none rounded-md sm:rounded-r-md font-semibold transition duration-300 mt-2 sm:mt-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpiritualWellnessPage;