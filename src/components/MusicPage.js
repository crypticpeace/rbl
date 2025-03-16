import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Search, Music } from 'lucide-react';
import song1 from '../assets/music/1.mp3';
import song2 from '../assets/music/2.mp3';
import song3 from '../assets/music/3.mp3';

const bhajansDatabase = [
  {
    id: 1,
    title: "ॐ जय जगदीश हरे",
    artist: "Traditional",
    audioUrl: song1, 
    duration: 300,
    lyrics: [
      "ॐ जय जगदीश हरे",
      "स्वामी जय जगदीश हरे",
      "भक्त जनों के संकट, दास जनों के संकट",
      "क्षण में दूर करे",
      "ॐ जय जगदीश हरे",
      "जो ध्यावे फल पावे, दुख बिन से मन का",
      "स्वामी दुख बिन से मन का",
      "सुख सम्पति घर आवे, सुख सम्पति घर आवे",
      "कष्ट मिटे तन का",
      "ॐ जय जगदीश हरे",
      "मात पिता तुम मेरे, शरण गहूँ किसकी",
      "स्वामी शरण गहूँ किसकी",
      "तुम बिन और न दूजा, तुम बिन और न दूजा",
      "आस करूँ जिसकी",
      "ॐ जय जगदीश हरे",
      "तुम पूरण परमात्मा, तुम अंतर्यामी",
      "स्वामी तुम अंतर्यामी",
      "पारब्रह्म परमेश्वर, पारब्रह्म परमेश्वर",
      "तुम सबके स्वामी",
      "ॐ जय जगदीश हरे",
      "तुम करुणा के सागर, तुम पालनकर्ता",
      "स्वामी तुम पालनकर्ता",
      "मैं मूढ़ खलकामी, मैं सेवक तुम स्वामी",
      "कृपा करो भर्ता",
      "ॐ जय जगदीश हरे",
      "तुम हो एक अगोचर, सबके प्राणपति",
      "स्वामी सबके प्राणपति",
      "किस विध मिलूँ दयामय, किस विध मिलूँ दयामय",
      "तुम को मैं कुमति",
      "ॐ जय जगदीश हरे",
      "दीनबन्धु दुखहर्ता, ठाकुर तुम मेरे",
      "स्वामी रक्षक तुम मेरे",
      "अपने हाथ उठाओ, अपनी शरण लगाओ",
      "द्वार पड़ा तेरे",
      "ॐ जय जगदीश हरे",
      "विषय-विकार मिटाओ, पाप हरो देवा",
      "स्वामी पाप हरो देवा",
      "श्रद्धा-भक्ति बढ़ाओ, श्रद्धा-भक्ति बढ़ाओ",
      "सन्तन की सेवा",
      "ॐ जय जगदीश हरे",
      "ॐ जय जगदीश हरे",
      "स्वामी जय जगदीश हरे",
      "भक्त जनों के संकट, दास जनों के संकट",
      "क्षण में दूर करे",
      "ॐ जय जगदीश हरे",
    ]
  },
  {
    id: 2,
    title: "हनुमान चालीसा",
    artist: "Traditional",
    audioUrl: song2,
    duration: 480,
    lyrics: [
      "श्री गुरु चरण सरोज रज",
      "निज मनु मुकुरु सुधारि",
      "बरनऊं रघुबर बिमल जसु",
      "जो दायकु फल चारि"
    ]
  },
  {
    id: 3,
    title: "गायत्री मंत्र",
    artist: "Traditional",
    audioUrl: song3, 
    duration: 240,
    lyrics: [
      "ॐ भूर्भुवः स्वः",
      "तत्सवितुर्वरेण्यं",
      "भर्गो देवस्य धीमहि",
      "धियो यो नः प्रचोदयात्"
    ]
  }
];

const SpiritualMusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [songs, setSongs] = useState(bhajansDatabase);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentLyricIndex, setCurrentLyricIndex] = useState(0);
  
  const audioRef = useRef(null);
  const lyricsContainerRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.src = songs[currentSongIndex].audioUrl;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [songs, currentSongIndex]); 

  const currentSong = songs[currentSongIndex];

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setSongs(bhajansDatabase);
      setCurrentSongIndex(0); 
    } else {
      const filtered = bhajansDatabase.filter(song => 
        song.title.toLowerCase().includes(query.toLowerCase()) ||
        song.artist.toLowerCase().includes(query.toLowerCase())
      );
      setSongs(filtered);
      setCurrentSongIndex(0); 
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      const lyricIndex = Math.floor(audio.currentTime / 5) % currentSong.lyrics.length;
      setCurrentLyricIndex(lyricIndex);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    return () => audio.removeEventListener('timeupdate', handleTimeUpdate);
  }, [currentSong]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(error => console.log("Playback failed:", error));
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const wasPlaying = !audio.paused;
    audio.src = currentSong.audioUrl;
    audio.load();
    if (wasPlaying) {
      audio.play().catch(error => console.log("Playback failed:", error));
    } else {
      setIsPlaying(false);
    }
    
    setCurrentTime(0);
    setCurrentLyricIndex(0);
  }, [currentSongIndex, currentSong]);

  const handleNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
  };

  const handlePrevious = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio) return;

    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    const newTime = percentage * currentSong.duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Calculate the starting index of the 4 lines to display
  const startIndex = Math.floor(currentLyricIndex / 4) * 4;
  const displayedLyrics = currentSong.lyrics.slice(startIndex, startIndex + 4);

  // Scroll to the current lyric
  useEffect(() => {
    if (lyricsContainerRef.current) {
      const lyricElement = lyricsContainerRef.current.children[currentLyricIndex % 4];
      if (lyricElement) {
        lyricElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [currentLyricIndex]);

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Music Player */}
        <div className="bg-white rounded-xl shadow-2xl p-6">
          {/* Search Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-blue-800 mb-4">भजन प्लेयर</h1>
            <div className="flex gap-4">
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="भजन खोजें..." 
                className="flex-1 text-lg p-4 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-colors">
                <Search size={24} />
              </button>
            </div>
          </div>

          {/* Song Info */}
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <Music className="w-12 h-12 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-800">{currentSong.title}</h2>
              <p className="text-blue-600">{currentSong.artist}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div 
              className="relative h-3 bg-blue-100 rounded-full cursor-pointer"
              onClick={handleSeek}
            >
              <div 
                className="absolute top-0 left-0 h-full bg-blue-600 rounded-full transition-all duration-300 ease-in-out"
                style={{ width: `${(currentTime / currentSong.duration) * 100}%` }}
              />
            </div>
            <div className="flex justify-between mt-2 text-blue-600 font-medium">
              <span>{Math.floor(currentTime / 60)}:{String(Math.floor(currentTime % 60)).padStart(2, '0')}</span>
              <span>{Math.floor(currentSong.duration / 60)}:{String(currentSong.duration % 60).padStart(2, '0')}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-8">
            <button 
              className="p-3 text-blue-600 hover:text-blue-800 transition-colors"
              onClick={handlePrevious}
            >
              <SkipBack size={36} />
            </button>
            <button 
              className="p-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors transform hover:scale-105"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause size={48} /> : <Play size={48} />}
            </button>
            <button 
              className="p-3 text-blue-600 hover:text-blue-800 transition-colors"
              onClick={handleNext}
            >
              <SkipForward size={36} />
            </button>
          </div>

          {/* Playlist Section */}
          <div className="mt-6 border-t border-blue-100 pt-4">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">सभी भजन:</h3>
            <div className="space-y-2">
              {songs.map((song, index) => (
                <div 
                  key={song.id}
                  onClick={() => setCurrentSongIndex(index)}
                  className={`flex items-center p-2 rounded-lg cursor-pointer ${
                    currentSongIndex === index 
                      ? 'bg-blue-100' 
                      : 'hover:bg-blue-50'
                  }`}
                >
                  <Music className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-blue-700">{song.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Lyrics */}
        <div className="bg-white rounded-xl shadow-2xl p-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">बोल:</h3>
          <div 
            ref={lyricsContainerRef}
            className="space-y-4 h-[400px] overflow-y-auto scroll-smooth"
          >
            {displayedLyrics.map((line, index) => (
              <p 
                key={startIndex + index} 
                className={`text-lg leading-relaxed p-4 rounded-lg transition-all duration-300 ${
                  (startIndex + index) === currentLyricIndex 
                    ? 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 shadow-md' 
                    : 'text-blue-700 hover:bg-blue-50'
                }`}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpiritualMusicPlayer;



