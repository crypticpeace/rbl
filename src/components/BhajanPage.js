import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bhajansData from '../assets/lyrics/bhajans.json';

const BhajanPage = () => {
  const [bhajans, setBhajans] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDeity, setSelectedDeity] = useState('All');
  const [expandedBhajan, setExpandedBhajan] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Handle both array and object JSON formats
    const data = Array.isArray(bhajansData) ? bhajansData : bhajansData?.bhajans || [];
    setBhajans(data);
  }, []);

  const deities = ['All', ...new Set(bhajans.map(bhajan => bhajan.deity))];

  const filteredBhajans = bhajans.filter(bhajan => {
    const matchesSearch = bhajan.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         bhajan.lyrics.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDeity = selectedDeity === 'All' || bhajan.deity === selectedDeity;
    return matchesSearch && matchesDeity;
  });

  const toggleExpand = (id) => {
    setExpandedBhajan(expandedBhajan === id ? null : id);
  };

  const handlePlay = (bhajanId) => {
    navigate(`/music/${bhajanId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800 mb-2">Bhajan Sangrah</h1>
          <p className="text-lg text-blue-700">Discover divine melodies for spiritual upliftment</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-medium text-blue-800 mb-1">
                Search Bhajans
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search by title or lyrics..."
                className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full sm:w-48">
              <label htmlFor="deity" className="block text-sm font-medium text-blue-800 mb-1">
                Filter by Deity
              </label>
              <select
                id="deity"
                className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedDeity}
                onChange={(e) => setSelectedDeity(e.target.value)}
              >
                {deities.map(deity => (
                  <option key={deity} value={deity}>{deity}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-6">
            {filteredBhajans.length > 0 ? (
              filteredBhajans.map(bhajan => (
                <div key={bhajan.id} className="border border-blue-200 rounded-lg overflow-hidden">
                  <div 
                    className="bg-blue-50 px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-blue-100 transition-colors"
                    onClick={() => toggleExpand(bhajan.id)}
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900">{bhajan.title}</h3>
                      <div className="flex gap-3 mt-1">
                        <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full">
                          {bhajan.deity}
                        </span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                          {bhajan.language}
                        </span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                          {bhajan.duration}
                        </span>
                      </div>
                    </div>
                    <svg 
                      className={`w-5 h-5 text-blue-600 transform transition-transform ${expandedBhajan === bhajan.id ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {expandedBhajan === bhajan.id && (
                    <div className="bg-white p-4">
                      <pre className="text-blue-900 whitespace-pre-wrap font-sans mb-4">
                        {bhajan.lyrics}
                      </pre>
                      <button 
                        className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2"
                        onClick={() => handlePlay(bhajan.id)}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        Play Music
                      </button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-blue-700">No bhajans found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BhajanPage;