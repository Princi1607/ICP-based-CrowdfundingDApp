import { useNavigate } from "react-router-dom";

function InvestCampaign() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Currently Available Campaigns</h1>
      <p>List of campaigns will be displayed here...</p>
      <button 
        onClick={() => navigate("/dashboard")}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Back to Dashboard
      </button>
    </div>
  );
}

export default InvestCampaign;
