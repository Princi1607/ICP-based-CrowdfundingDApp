import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import RegisterCampaign from "./pages/RegisterCampaign";
import InvestCampaign from "./pages/InvestCampaign";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<RegisterCampaign />} />
        <Route path="/invest" element={<InvestCampaign />} />
      </Routes>
    </Router>
  );
}

export default App;
