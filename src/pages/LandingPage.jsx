import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const { login, isAuthenticated, principal } = useAuth();
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to the Crowdfunding DApp</h1>
      <p>Join us to create and invest in impactful campaigns.</p>

      {!isAuthenticated ? (
        <button 
          onClick={login} 
          style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        >
          Login with Internet Identity
        </button>
      ) : (
        <>
          <p>Logged in as: {principal}</p>
          <button 
            onClick={() => navigate("/dashboard")} 
            style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
          >
            Go to Dashboard
          </button>
        </>
      )}
    </div>
  );
}

export default LandingPage;
