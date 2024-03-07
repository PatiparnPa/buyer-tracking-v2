import { useNavigate } from "react-router-dom";
import Goback from "../assets/goback.png";
import Upload from "../assets/upload.png";


export const UploadSlip2 = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back
  };


  return (
    <>
      <div
        className="app-bar"
        style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}
      >
        <button
          onClick={handleGoBack}
          style={{
            textDecoration: "none",
            marginLeft: "3%",
            marginRight: "-60%",
            marginBottom: "-1%",
            color: "white",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <img
            src={Goback}
            alt="Go back"
            style={{ marginRight: "8px", width: "28px", height: "28px" }}
          />
        </button>
        <h5 style={{ marginTop: "2%", marginLeft: "3%" }}>อัปโหลดสลีป</h5>
        <div className="right-elements">
          <div className="elements-container">
            {/* Add other elements as needed */}
          </div>
        </div>
      </div>
      <div style={{textAlign:'center', marginTop:'25%'}}>
        <label htmlFor="fileInput">
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <img
              src={Upload}
              alt="Upload"
              style={{
                width: "238px",
                height: "238px",
                padding:'20px'
              }}
            />
          </button>
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
        />
        <div style={{fontSize:'18px', fontWeight:'bold'}}>Please upload your payment slip</div>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: 5,
          width: "100%",
          textAlign: "center",
          padding: "10px",
        }}
      >
        <button
          className="button-overlay"
          style={{
            background: "#2357A5",
          }}
        >
          Upload Slip
        </button>
      </div>
    </>
  );
};
