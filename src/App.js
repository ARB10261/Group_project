import "./App.css"; 
import Navbar from "./Landingpage/Navbar";
import FooterSection from "./Landingpage/FooterSection";
import LandingPage from "./Landingpage/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Aboutpage/About";
import Cards from "./Contactpage/Cards";
import Department from "./Departments/Department";
import Service from "./Servicespage/Service";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

import DashboardNavbar from "./Dashboard/DashboardNavbar";
import Dashboard from "./Dashboard/Dashboard";
import Patients from "./Dashboard/Patients";
import Doctors from "./Dashboard/Doctors";
import Appointments from "./Dashboard/Appointments";
import Records from "./Dashboard/Records";
import Reports from "./Dashboard/Reports";

import SearchResults from "./SearchResults";   // ✅ FIXED — use real component

import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import DashboardFooter from "./Dashboard/DashboardFooter";

import GeneralMedicinePage from "./Components/GeneralMedicinePage";
import CardiologyPage from "./Components/CardiologyPage";
import NeurologyPage from "./Components/NeurologyPage";
import DentalCarePage from "./Components/DentalCarePage";
import GynecologyPage from "./Components/GynecologyPage";
import LaboratoryPage from "./Components/LaboratoryPage";

import TermsAndConditionsPage from "./Components/TermsAndConditionsPage";
import PrivacyPolicyPage from "./Components/PrivacyPolicyPage";
import FAQsPage from "./Components/FAQsPage";
import HelpSupportPage from "./Components/HelpSupportPage";
import CompanyLicensePage from "./Components/CompanyLicensePage";


function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Router>

      <style>{`
        html, body, #root {
          height: 100%;
        }
        .main-content {
          min-height: calc(100vh - 70px - 60px);
        }
      `}</style>

      {isLoggedIn ? <DashboardNavbar /> : <Navbar />}

      <div className="main-content">
        <Routes>

          {/* PUBLIC ROUTES */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Cards />} />
          <Route path="/department" element={<Department />} />
          <Route path="/service" element={<Service />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* 🔍 SEARCH ROUTE USING REAL COMPONENT */}
          <Route path="/search" element={<SearchResults />} />

          {/* DASHBOARD ROUTES */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/records" element={<Records />} />
          <Route path="/reports" element={<Reports />} />

          {/* Department pages */}
<Route path="/general-medicine" element={<GeneralMedicinePage />} />
<Route path="/cardiology" element={<CardiologyPage />} />
<Route path="/neurology" element={<NeurologyPage />} />
<Route path="/dental-care" element={<DentalCarePage />} />
<Route path="/gynecology" element={<GynecologyPage />} />
<Route path="/laboratory" element={<LaboratoryPage />} />

{/* Support & Policies pages */}
<Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
<Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
<Route path="/faqs" element={<FAQsPage />} />
<Route path="/help-support" element={<HelpSupportPage />} />
<Route path="/company-license" element={<CompanyLicensePage />} />


        </Routes>
      </div>

      {!isLoggedIn ? <FooterSection /> : <DashboardFooter />}
    </Router>
  );
}

export default App;
