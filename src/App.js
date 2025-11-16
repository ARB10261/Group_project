import './App.css';
import Navbar from './Landingpage/Navbar';
import FooterSection from './Landingpage/FooterSection';
import LandingPage from './Landingpage/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Aboutpage/About';
import Contact from './Contactpage/Contact';
import Department from './Departments/Department';
import Service from './Servicespage/Service';
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/department" element={<Department />} />
        <Route path="/service" element={<Service />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>

      <FooterSection />
      
    </Router>
  );
}

export default App;
