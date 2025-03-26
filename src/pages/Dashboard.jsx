import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { logout, principal } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout(); // Logout user
    navigate("/"); // Redirect to Landing Page
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Dashboard</h1>
      <p>Welcome {principal}</p>
      <button 
        onClick={() => navigate("/register")} 
        style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}
      >
        Register Campaign
      </button>
      <button 
        onClick={() => navigate("/invest")} 
        style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}
      >
        Invest in Campaigns
      </button>
      <br /><br />
      <button 
        onClick={handleLogout} 
        style={{ padding: "10px 20px", fontSize: "16px", backgroundColor: "#d64161", color: "white" }}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
