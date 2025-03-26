import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterCampaign() {
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState({ name: "", description: "", goal: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Campaign Registered Successfully!");
    navigate("/dashboard");
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Register a New Campaign</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Campaign Name" 
          value={campaign.name} 
          onChange={(e) => setCampaign({ ...campaign, name: e.target.value })}
          required
        /><br /><br />
        <textarea 
          placeholder="Description" 
          value={campaign.description} 
          onChange={(e) => setCampaign({ ...campaign, description: e.target.value })}
          required
        /><br /><br />
        <input 
          type="number" 
          placeholder="Funding Goal (ICP)" 
          value={campaign.goal} 
          onChange={(e) => setCampaign({ ...campaign, goal: e.target.value })}
          required
        /><br /><br />
        <button type="submit" style={{ padding: "10px 20px", fontSize: "16px" }}>Submit</button>
      </form>
    </div>
  );
}

export default RegisterCampaign;
