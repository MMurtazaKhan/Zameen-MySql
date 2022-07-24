// Real

import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Profile = () => {
  const [user, setUser] = useState("");
  // const { CID } = useParams();
  const CID = localStorage.getItem("CID");

  const history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/user/me/${CID}`)
      .then((res) => setUser({ ...res.data[0] }));
  }, [CID]);

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 2,
      }}
    />
  );

  function logoutUser() {
    localStorage.removeItem("CID");
    history.push("/");
    toast.success("Logout Successfully");
  }
  const cid = localStorage.getItem("CID");


  return (
    <>
      {cid ? (
        <div className="profileContainer">
          <div className="profile-design"></div>
          <h1>My Profile</h1>
          <div className="profile-main">
            <div className="profile-sideDesign"></div>

            <div className="userImgCont">
              <img
                // src={user.avatar.url}
                src="/zameen.jpeg"
                alt="user-pic"
                style={{ Height: "100px", width: "100px" }}
              />
              <button
                className="btn btn-warning btn-lg"
                onClick={() => history.push("/EditProfile")}
              >
                Edit Profile
              </button>
              <button
                className="btn btn-warning btn-lg"
                onClick={() => logoutUser()}
              >
                Logout
              </button>

              {user && user.role === "admin" ? (
                <button
                  className="btn btn-warning btn-lg"
                  onClick={() => history.push("/admin/dashboard")}
                >
                  Admin Dashboard
                </button>
              ) : (
                ""
              )}
              {/* // <button className="btn btn-warning btn-lg" onClick={ () =>history.push("/admin/dashboard")}>Admin Dashboard</button> */}
            </div>

            <div className="userInfoCont">
              <h2 style={{ textDecoration: "underline" }}>Basic Info</h2>

              <div id="profileLabelId" className="profile-label">
                <h4>Full Name</h4>
                <p>{user.name}</p>
                <ColoredLine color="black" />
              </div>

              <div className="profile-label">
                <h4>Email</h4>
                <p>{user.email}</p>
                <ColoredLine color="black" />
              </div>

              <div className="profile-label">
                <h4>Phone No</h4>
                <p>{user.contact}</p>
                <ColoredLine color="black" />
              </div>

              <div className="profile-label">
                <h4>Email</h4>
                <p>{user.email}</p>
                <ColoredLine color="black" />
              </div>
            </div>

            <div className="profile-sideDesign"></div>
          </div>
        </div>
      ) : (
        // history.push("/register")
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <h1 style={{ fontSize: "20px" }}>
            you have no access ko access to this resource to access this please
            login first:
          </h1>
          <button
            style={{ width: "20%" }}
            className="btn btn-warning btn-lg"
            onClick={() => history.push("/register")}
          >
            Login Here
          </button>
        </div>
      )}
    </>
  );
};

export default Profile;
