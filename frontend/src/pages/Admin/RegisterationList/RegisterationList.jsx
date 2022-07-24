import React, { useEffect, useRef, useState } from "react";
import "./RegisterationList.css";
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link } from "react-router-dom";

const RegisterationList = ({ history }) => {
  const [data, setData] = useState([]);
  const loadData = async () => {
  
    const response = await axios.get(
      `http://localhost:5000/api/registerations/admin`
    );

    setData(response.data);
  };

  const CID = localStorage.getItem("CID");
  const [user, setUser] = useState("");

  useEffect(() => {
    loadData();
    axios
      .get(`http://localhost:5000/api/user/me/${CID}`)
      .then((res) => setUser({ ...res.data[0] }));
  }, [CID]);

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
            <div>
              <div className="userListContainer">
                <h1 id="userListHeading">All Registerations</h1>

                <div style={{ marginTop: "150px" }}>
                  <table className="styled-table">
                    <thead>
                      <tr>
                        <th style={{ textAlign: "center" }}>No.</th>
               

                        <th style={{ textAlign: "center" }}>
                          Registeration ID
                        </th>
                        <th style={{ textAlign: "center" }}>User ID</th>
                        <th style={{ textAlign: "center" }}>Project ID</th>
                        <th style={{ textAlign: "center" }}>Project Name</th>
                        <th style={{ textAlign: "center" }}>
                          Installation Remaining
                        </th>
                        <th style={{ textAlign: "center" }}>Email</th>
                        <th style={{ textAlign: "center" }}>Contact</th>
                        <th style={{ textAlign: "center" }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, index) => {
                        return (
                          <tr key={item.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.RID}</td>

                            <td>{item.CID}</td>
                            <td>{item.PRID}</td>

                            <td>{item.name}</td>
                            <td>{item.installation}</td>
                            <td>{item.email}</td>
                            <td>{item.contact}</td>
                            <td>
                              <Link
                                to={`/admin/reg/update/${item.RID}/${item.PRID}/${item.CID}`}
                              >
                                <button className="btn btn-edit">Edit</button>
                              </Link>
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
      ) : (
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

export default RegisterationList;

