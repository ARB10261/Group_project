import "./App.css"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

// Layout
import Navbar from "./Landingpage/Navbar";
import FooterSection from "./Landingpage/FooterSection";
import DashboardNavbar from "./Dashboard/DashboardNavbar";
import DashboardFooter from "./Dashboard/DashboardFooter";

// Pages
import LandingPage from "./Landingpage/LandingPage";
import About from "./Aboutpage/About";
import Cards from "./Contactpage/Cards";
import Department from "./Departments/Department";
import Service from "./Servicespage/Service";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import SearchResults from "./SearchResults";

// Dashboard Pages
import Dashboard from "./Dashboard/Dashboard";
import Patients from "./Dashboard/Patients";
import Doctors from "./Dashboard/Doctors";
import Appointments from "./Dashboard/Appointments";
import Records from "./Dashboard/Records";
import Reports from "./Dashboard/Reports";

// Department Pages
import GeneralMedicinePage from "./Components/GeneralMedicinePage";
import CardiologyPage from "./Components/CardiologyPage";
import NeurologyPage from "./Components/NeurologyPage";
import DentalCarePage from "./Components/DentalCarePage";
import GynecologyPage from "./Components/GynecologyPage";
import LaboratoryPage from "./Components/LaboratoryPage";

// Policies & Support
import TermsAndConditionsPage from "./Components/TermsAndConditionsPage";
import PrivacyPolicyPage from "./Components/PrivacyPolicyPage";
import FAQsPage from "./Components/FAQsPage";
import HelpSupportPage from "./Components/HelpSupportPage";
import CompanyLicensePage from "./Components/CompanyLicensePage";

// ProtectedRoute wrapper
const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

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
          display: flex;
          flex-direction: column;
        }
      `}</style>

      {/* Conditional Navbar */}
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
          <Route path="/search" element={<SearchResults />} />

          {/* DASHBOARD ROUTES (Protected) */}
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/patients" element={<ProtectedRoute><Patients /></ProtectedRoute>} />
          <Route path="/doctors" element={<ProtectedRoute><Doctors /></ProtectedRoute>} />
          <Route path="/appointments" element={<ProtectedRoute><Appointments /></ProtectedRoute>} />
          <Route path="/records" element={<ProtectedRoute><Records /></ProtectedRoute>} />
          <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />

          {/* Department pages */}
          <Route path="/general-medicine" element={<GeneralMedicinePage />} />
          <Route path="/cardiology" element={<CardiologyPage />} />
          <Route path="/neurology" element={<NeurologyPage />} />
          <Route path="/dental-care" element={<DentalCarePage />} />
          <Route path="/gynecology" element={<GynecologyPage />} />
          <Route path="/laboratory" element={<LaboratoryPage />} />

          {/* Policies & Support */}
          <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/help-support" element={<HelpSupportPage />} />
          <Route path="/company-license" element={<CompanyLicensePage />} />

        </Routes>
      </div>

      {/* Conditional Footer */}
      {!isLoggedIn ? <FooterSection /> : <DashboardFooter />}
    </Router>
  );
}

export default App;
