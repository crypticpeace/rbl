
import SpiritualWellnessPage from './components/SpiritualWellnessPage'
import Footer from './components/footer'

import { Routes, Route } from 'react-router-dom'; 
import MusicPage from './components/MusicPage';

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
            <MusicPage />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;