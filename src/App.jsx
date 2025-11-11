import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import CountUpPage from './pages/CountUpPage'
import BallpitPage from './pages/BallpitPage'
import GalleryPage from './pages/InfiniteMenuPage'
import ModelPage from './pages/ModelPage'
import TargetPage from './pages/TargetPage'
import TestPage from './pages/TestPage'
import DomeGalleryPage from './pages/DomeGalleryPage'
import './App.css'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/countup" element={<CountUpPage />} />
        <Route path="/homepage" element={<HomePage />} /> 
        <Route path="/ballpit" element={<BallpitPage />} />
        <Route path="/domegallery" element={<DomeGalleryPage />} />
        <Route path="/model" element={<ModelPage />} />
        <Route path="/target" element={<TargetPage />} /> 
        <Route path="/test" element={<TestPage />} /> 
        
      </Routes>
    </Router>
  )
}

export default App