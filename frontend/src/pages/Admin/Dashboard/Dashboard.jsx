import React, { useState, useRef, useEffect } from "react";
import "./Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaProjectDiagram } from "react-icons/fa";
import { FaPersonBooth } from "react-icons/fa";
import { AiFillPropertySafety } from "react-icons/ai";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const [show, setShow] = useState("yes");
  const sidebarTab = useRef(null);
  const [user, setUser] = useState("");
  const history = useHistory();

  const controlSidebar = (e, tab) => {
    if (tab === "yes") {
      sidebarTab.current.classList.add("sideBarMoveToLeft");
      sidebarTab.current.classList.remove("admin-sidebar");
      setShow("no");
    } else {
      sidebarTab.current.classList.add("admin-sidebar");
      sidebarTab.current.classList.remove("sideBarMoveToLeft");
      setShow("yes");
    }
  };

  const CID = localStorage.getItem("CID");
  
  
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/user/me/${CID}`)
      .then((res) => setUser({ ...res.data[0] }));
  }, [CID]);

  return (
    <>
  {user && user.role === "admin" ? (
    <div className="dashboard">
      <div className="admin-sidebar" ref={sidebarTab}>
        <Sidebar />
      </div>
      <div className="admin-container">
        <div className="dashboard-nav">
          <button onClick={(e) => controlSidebar(e, show)}>
            <GiHamburgerMenu style={{ fontSize: "1.5rem" }} />
          </button>
        </div>

        <div className="dashboard-main">
          <div className="dashboard-cards">
            <div className="dashboard-card">
              <div className="dashboard-card-svg">
                <AiOutlineUsergroupAdd style={{ fontSize: "20px" }} />
              </div>
              <span>50</span>
              <p>Users</p>
            </div>
            <div className="dashboard-card">
              <div className="dashboard-card-svg">
                <AiFillPropertySafety style={{ fontSize: "20px" }} />
              </div>
              <span>13</span>
              <p>Property</p>
            </div>
            <div className="dashboard-card">
              <div className="dashboard-card-svg">
                <FaProjectDiagram style={{ fontSize: "20px" }} />
              </div>
              <span>5</span>
              <p>Projects</p>
            </div>
            <div className="dashboard-card">
              <div className="dashboard-card-svg">
                <FaPersonBooth style={{ fontSize: "20px" }} />
              </div>
              <span>6</span>
              <p>Inverstors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ): (
    <div
    style={{
      textAlign: "center",
      marginTop: "20px",
    }}
  >
    <h1 style={{ fontSize: "20px" }}>
      you have no access ko access to this resource to access this please
      login with admin account:
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

export default Dashboard;
