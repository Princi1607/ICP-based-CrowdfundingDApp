import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import RegisterCampaign from "./pages/RegisterCampaign";
import InvestPage from "./pages/InvestCampaign";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<RegisterCampaign />} />
        <Route path="/invest" element={<InvestPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
