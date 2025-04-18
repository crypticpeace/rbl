import SpiritualWellnessPage from './components/SpiritualWellnessPage';
import Footer from './components/footer';
import { Routes, Route } from 'react-router-dom'; 
import MusicPage from './components/MusicPage';
import StoryPage from './components/StoryPage';
import Navbar from './components/navbar';
import BhajanPage from './components/BhajanPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <>
            <SpiritualWellnessPage />
            <Footer />
          </>
        } />
        <Route path="/music" element={
          <>
            <BhajanPage />
            <Footer />
          </>
        } />
        <Route path="/music/:id" element={
          <>
            <MusicPage />
            <Footer />
          </>
        } />
        <Route path="/stories" element={
          <>
            <Navbar />
            <StoryPage />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;