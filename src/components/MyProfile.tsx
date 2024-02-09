import TabBar from "./Tabbar";
import Cart2 from "../assets/cart2.png";
import { Link } from 'react-router-dom';
import Logout from "../assets/logout.jpg";
import GoNext from "../assets/yeet.jpg";

export const UserProfilePage = () => {
  return (
    <>
      <div
        className="app-bar"
        style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}
      >
        <h5 style={{ marginTop: "3%", marginLeft: "3%" }}>My Profile</h5>
        <div className="right-elements">
          <div className="elements-container">
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                marginLeft: "5px",
                marginTop: "5px",
              }}
            >
              <img
                src={Cart2}
                alt="Cart"
                style={{ width: "33px", height: "33px" }}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="user-profile-container">
        <p style={{fontSize:'20px', fontWeight:'bold', padding:'20px', paddingBottom:'10px', fontFamily:'prompt'}}>Personal Information</p>
        <div className="profile-item" style={{alignItems:'center'}}>
          <div className="label">Display Name</div>
          <Link to='/name' style={{textDecoration:'none'}}><div style={{fontSize:'18px'}}>Peter Johnson</div></Link>
        </div>
        <div className="profile-item">
          <div className="label">Edit Favorite Menu</div>
          <Link to='/favmenu' className="link"><img src={GoNext} alt="link" style={{width:'30px', height:'30px'}}></img></Link>
        </div>
        <div className="profile-item" style={{alignItems:'center'}}>
          <div className="label">History Order</div>
          <Link to='/order' className="link"><img src={GoNext} alt="link" style={{width:'30px', height:'30px'}}></img></Link>
        </div>
        <div className="profile-item">
          <button style={{border:'none', background:'none', fontSize:'18px'}}><img src={Logout}></img>  Logout</button>
        </div>
      </div>
      <TabBar></TabBar>
    </>
  );
};
