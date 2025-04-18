import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import bhajansData from '../assets/lyrics/bhajans.json';

const MusicPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [currentBhajan, setCurrentBhajan] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    // Find the bhajan by ID
    const data = Array.isArray(bhajansData) ? bhajansData : bhajansData?.bhajans || [];
    const bhajan = data.find(b => b.id === parseInt(id));
    
    if (!bhajan) {
      navigate('/bhajans');
      return;
    }

    setCurrentBhajan(bhajan);

    // Initialize audio
    audioRef.current = new Audio(bhajan.audio);
    const audio = audioRef.current;

    // Event listeners
    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    // Don't auto-play - let user initiate playback
    audio.load();

    return () => {
      // Cleanup
      audio.pause();
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [id, navigate]);

  const togglePlayPause = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Audio playback error:", error);
      setIsPlaying(false);
    }
  };

  const handleProgressChange = (e) => {
    if (!audioRef.current) return;
    const newTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = newTime;
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (!currentBhajan) {
    return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center">
        <div className="text-blue-800">Loading bhajan...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <button 
          onClick={() => navigate('/music')}
          className="mb-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Bhajans
        </button>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">{currentBhajan.title}</h1>
          
          <div className="mb-6">
            <pre className="text-blue-900 whitespace-pre-wrap font-sans">{currentBhajan.lyrics}</pre>
          </div>
          
          <div className="flex flex-col items-center gap-4 mb-6">
            <button
              onClick={togglePlayPause}
              className={`p-4 rounded-full ${isPlaying ? 'bg-blue-700' : 'bg-blue-600'} text-white`}
            >
              {isPlaying ? (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              )}
            </button>
            
            <div className="w-full flex items-center gap-2">
              <span className="text-sm text-blue-700 w-12 text-right">
                {formatTime(audioRef.current?.currentTime || 0)}
              </span>
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleProgressChange}
                className="flex-1 h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-sm text-blue-700 w-12">
                {formatTime(duration)}
              </span>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">
              {currentBhajan.deity}
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              {currentBhajan.duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPage;