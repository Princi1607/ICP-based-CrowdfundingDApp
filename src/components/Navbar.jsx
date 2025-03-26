import { useNavigate } from "react-router-dom";

const Navbar = ({ handleLogin }) => {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between p-4 bg-blue-600 text-white">
      <h1 className="text-xl font-bold">Crowdfunding DApp</h1>
      <button 
        onClick={handleLogin} 
        className="bg-white text-blue-600 px-4 py-2 rounded"
      >
        Login with Internet Identity
      </button>
    </nav>
  );
};

export default Navbar;
