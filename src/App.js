import './App.css';
import Navbar from './Landingpage/Navbar';
import FooterSection from './Landingpage/FooterSection';
import LandingPage from './Landingpage/LandingPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './Aboutpage/About';
import Cards from './Contactpage/Cards';
import Department from './Departments/Department';
import Service from './Servicespage/Service';

import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

import DashboardNavbar from "./Dashboard/DashboardNavbar";
// import Dashboard from "./Dashboard/Dashboard";
import Patients from "./Dashboard/Patients";
import Doctors from "./Dashboard/Doctors";
import Appointments from "./Dashboard/Appointments";
import Records from "./Dashboard/Records";
import Reports from "./Dashboard/Reports";

import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function App() {

  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Router>

      {/* NAVBAR: Public or Dashboard */}
      {isLoggedIn ? <DashboardNavbar /> : <Navbar />}

      <Routes>

        {/* PUBLIC PAGES */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Cards />} />
        <Route path="/department" element={<Department />} />
        <Route path="/service" element={<Service />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* DASHBOARD PAGES (AFTER LOGIN) */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/patients" element={<Patients />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/records" element={<Records />} />
        <Route path="/reports" element={<Reports />} />

      </Routes>

      {/* Hide footer when logged in */}
      {!isLoggedIn && <FooterSection />}

    </Router>
  );
}

export default App;
