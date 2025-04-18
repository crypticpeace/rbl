import React, { useState, useEffect } from 'react';
import storiesData from '../assets/story/story.json';

const App = () => {
  const [currentPage, setCurrentPage] = useState('storiesList');
  const [selectedStory, setSelectedStory] = useState(null);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    // Set stories from imported JSON
    setStories(storiesData);
  }, []);

  // Navigate to individual story
  const handleReadStory = (story) => {
    setSelectedStory(story);
    setCurrentPage('storyDetail');
  };

  // Go back to stories list
  const handleBackToList = () => {
    setCurrentPage('storiesList');
  };

  // Get image for story
  const getStoryImage = (storyId) => {
    // Using placeholder images based on story ID
    return `https://picsum.photos/id/${100 + storyId}/400/300`;
  };

  // Header component
  const Header = () => (
   
      <div className="container mx-auto flex justify-between items-center">
        
        {currentPage === 'storyDetail' && (
          <button 
            onClick={handleBackToList}
            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition"
          >
            वापस सूची पर जाएं
          </button>
        )}
      </div>
   
  );

  // Stories list component
  const StoriesList = () => (
    <div className="container mx-auto p-4">
      <Header />
      <div className="grid md:grid-cols-2 gap-6">
        {stories.map(story => (
          <div 
            key={story.id} 
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
            onClick={() => handleReadStory(story)}
          >
            <img 
              src={getStoryImage(story.id)} 
              alt={story.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{story.title}</h2>
              <p className="text-gray-600 mb-4">{story.summary}</p>
              <button 
                className="text-blue-600 font-medium hover:text-blue-800 flex items-center"
                onClick={() => handleReadStory(story)}
              >
                पूरी कहानी पढ़ें
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Story detail component
  const StoryDetail = () => {
    if (!selectedStory) return null;
    
    return (
      <div className="container mx-auto p-4">
        <Header />
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src={getStoryImage(selectedStory.id)} 
            alt={selectedStory.title} 
            className="w-full h-64 object-cover"
          />
          
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-4">{selectedStory.title}</h1>
            <div className="prose max-w-none">
              {selectedStory.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed text-gray-700">{paragraph.trim()}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render the appropriate page based on currentPage state
  return (
    <div className="min-h-screen bg-gray-100">
      {currentPage === 'storiesList' && <StoriesList />}
      {currentPage === 'storyDetail' && <StoryDetail />}
    </div>
  );
};

export default App;