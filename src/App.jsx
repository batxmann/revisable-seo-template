import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:category/:slug" element={<LandingPage />} />
    </Routes>
  )
}

export default App
