import React, { useState, useRef } from "react";
import "./Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaProjectDiagram } from "react-icons/fa";
import { FaPersonBooth } from "react-icons/fa";
 import { AiFillPropertySafety } from "react-icons/ai";



const Dashboard = () => {
  const [show, setShow] = useState("yes");
  const sidebarTab = useRef(null);

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

  return (
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
                <AiOutlineUsergroupAdd style={{fontSize:"20px"}}/>
              </div>
              <span>50</span>
              <p>Users</p>
            </div>
            <div className="dashboard-card">
              <div className="dashboard-card-svg">
                <AiFillPropertySafety style={{fontSize:"20px"}}/>
              </div>
              <span>13</span>
              <p>Property</p>
            </div>
            <div className="dashboard-card">
              <div className="dashboard-card-svg">
                <FaProjectDiagram style={{fontSize:"20px"}}/>
              </div>
              <span>5</span>
              <p>Projects</p>
            </div>
            <div className="dashboard-card">
              <div className="dashboard-card-svg">
                <FaPersonBooth style={{fontSize:"20px"}}/>
              </div>
              <span>6</span>
              <p>Inverstors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

//  <NavLink
// to={`/${link.name}`}
// key={link.name}
// onClick={handleCloseSideBar}
// style={({ isActive }) => ({
//   backgroundColor: isActive ? currentColor : '',
// })}
// className={({ isActive }) => (isActive ? activeLink : normalLink)}
// >
// {link.icon}
// <span className="capitalize ">{link.name}</span>
// </NavLink>

// className={({ isActive }) => (isActive ? activeLink : normalLink)}
