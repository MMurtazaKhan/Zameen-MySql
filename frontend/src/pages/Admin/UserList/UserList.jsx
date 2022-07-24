import React, { useEffect, useRef, useState } from "react";
import "./UserList.css";
import Sidebar from "../Sidebar/Sidebar";
import { toast } from "react-toastify";
import axios from "axios";
import { GiHamburgerMenu } from "react-icons/gi";

const UserList = ({ history }) => {
  const [data, setData] = useState([]);
  const loadData = async () => {
    const response = await axios.get(`http://localhost:5000/api/users`);
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

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
            <h1 id="userListHeading">All Users</h1>

            <div style={{ marginTop: "150px" }}>
              <table className="styled-table">
                <thead>
                  <tr>
                    <th style={{ textAlign: "center" }}>No.</th>
                    <th style={{ textAlign: "center" }}>Name</th>
                    <th style={{ textAlign: "center" }}>Email</th>
                    <th style={{ textAlign: "center" }}>Contact</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => {
                    return (
                      <tr key={item.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
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

export default UserList;

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
