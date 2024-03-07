import Logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import { useUser } from './UserContext';
export const UserLogin = () => {
  const { setUserId } = useUser();
  const navigate = useNavigate();

  // Assuming you get the userId from a login API response
  const handleLogin = (userId: string) => {
    setUserId(userId);
    navigate('/');
    // Other login logic
  };
  return (
    <div className="login-container">
      <img src={Logo} alt="Logo" className="logo" />
      <br></br>
      <div style={{textAlign:'center', marginBottom:'40%'}}>
        <h5 style={{fontWeight:'bold'}}>Welcome</h5>
        <p>Please Login with Line before start</p>
      </div>
      <button onClick={() => handleLogin('user123')} className="login-button">Login with LINE</button>
    </div>
  );
};
