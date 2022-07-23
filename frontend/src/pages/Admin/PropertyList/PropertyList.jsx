import React, { useEffect, useRef, useState } from "react";
import "./PropertyList.css";
import Sidebar from "../Sidebar/Sidebar";
import { toast } from "react-toastify";
import axios from "axios";
import { GiHamburgerMenu } from "react-icons/gi";

const PropertyList = ({ history }) => {
  const [data, setData] = useState([]);
  const loadData = async () => {
    // const response = await axios.get(`http://localhost:5000/api/properties`);
    const response = await axios.get(`http://localhost:5000/api/properties/admin`);
    
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteProperty = (PID) => {
    if (window.confirm("Are you sure want to delete this property?")) {
      axios.delete(`http://localhost:5000/api/remove/property/${PID}`);
      toast.success("Contact delete successfully");
      setTimeout(() => loadData(), 500);
    }
  };

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
        <div>
          <div className="userListContainer">
            <h1 id="userListHeading">All Property</h1>

            <div style={{ marginTop: "150px" }}>
              <table className="styled-table">
                <thead>
                  <tr>
                    <th style={{ textAlign: "center" }}>Property ID</th>
                    <th style={{ textAlign: "center" }}>User ID</th>
                    <th style={{ textAlign: "center" }}>Purpose</th>
                    <th style={{ textAlign: "center" }}>Type</th>
                    <th style={{ textAlign: "center" }}>City</th>
                    <th style={{ textAlign: "center" }}>Price</th>
                    <th style={{ textAlign: "center" }}>Area</th>
                    <th style={{ textAlign: "center" }}>Name</th>
                    <th style={{ textAlign: "center" }}>Email</th>
                    <th style={{ textAlign: "center" }}>Contact</th>
                    <th style={{ textAlign: "center" }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => {
                    return (
                      <tr key={item.id}>
                        <th scope="row">{item.PID}</th>
                        <td>{item.CID}</td>
                        <td>{item.purpose}</td>
                        <td>{item.type}</td>
                        <td>{item.city}</td>
                        <td>{item.price}</td>
                        <td>{item.area}</td>
                        <td>{item.name}</td>

                        <td>{item.email}</td>
                        <td>{item.contact}</td>


                        <td>
                          <button
                            className="btn btn-delete"
                            onClick={() => deleteProperty(item.PID)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;

// import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import axios from "axios";
// import "./UserList.css";

// const Home = () => {
//   const [data, setData] = useState([]);
//   const loadData = async () => {
//     const response = await axios.get(
//       `http://localhost:5000/api/users`
//     );
//     setData(response.data);
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//     const deleteUser = (CID) => {
//       if (window.confirm("Are you sure want to delete this contact?")) {
//         axios.delete(`http://localhost:5000/api/remove/user/${CID}`);
//         toast.success("Contact delete successfully");
//         setTimeout(() =>
//           loadData(), 500);
//       }
//     };

//   return (
// <div style={{ marginTop: "150px" }}>
//   <table className="styled-table">
//     <thead>
//       <tr>
//         <th style={{ textAlign: "center" }}>No.</th>
//         <th style={{ textAlign: "center" }}>Name</th>
//         <th style={{ textAlign: "center" }}>Email</th>
//         <th style={{ textAlign: "center" }}>Contact</th>
//         <th style={{ textAlign: "center" }}>Action</th>
//       </tr>
//     </thead>
//     <tbody>
//       {data.map((item, index) => {
//         return (
//           <tr key={item.id}>
//             <th scope="row">{index + 1}</th>
//             <td>{item.name}</td>
//             <td>{item.email}</td>
//             <td>{item.contact}</td>
//             <td>
//               <button
//                 className="btn btn-delete"
//                 onClick={() => deleteUser(item.CID)}
//               >
//                 Delete
//               </button>
//             </td>
//           </tr>
//         );
//       })}
//     </tbody>
//   </table>
// </div>
//   );
// };

// export default Home;
