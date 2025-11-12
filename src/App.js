import './App.css';
import Navbar from './Landingpage/Navbar';
import FooterSection from './Landingpage/FooterSection';
import LandingPage from './Landingpage/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Aboutpage/About';
import Contact from './Contactpage/Contact';
import Department from './Departments/Department';
import Service from './Servicespage/Service';

function App() {
  return (
    <Router>
      {/* Navbar is now inside Router */}
      <Navbar />

      {/* Page routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/department" element={<Department />} />
        <Route path="/service" element={<Service />} />
      </Routes>

      {/* Footer stays visible */}
      <FooterSection />
    </Router>
  );
}

export default App;
