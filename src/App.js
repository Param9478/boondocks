import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/footer'
import Homepage from './components/homepage'
import AboutUs from './components/about-us'
import Contact from './components/contact-us'
import OtherWebsite from './components/otherWebsite'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="menu" element={<OtherWebsite />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
