import logo from './logo.svg';
import './App.css';
import Navbar from './Landingpage/Navbar';
import HeroSection from './Landingpage/Herosection';
import BodySection from './Landingpage/BodySection';
import ServicesSection from './Landingpage/ServicesSection';
import AppointmentSection from './Landingpage/AppointmentSection';
import FeedbackSection from './Landingpage/FeedbackSection';
import FooterSection from './Landingpage/FooterSection';
function App() {
  return (
    <div >
    <Navbar/>
    <HeroSection/>
    <BodySection/>
    <ServicesSection/>
    <AppointmentSection/>
    <FeedbackSection/>
    <FooterSection/>
    </div>
  );
}

export default App;
