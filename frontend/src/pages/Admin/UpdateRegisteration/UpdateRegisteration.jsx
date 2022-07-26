import React, { useEffect, useRef, useState } from "react";

import Sidebar from "../Sidebar/Sidebar";

import { GiHamburgerMenu } from "react-icons/gi";

import "./UpdateRegisteration.css";
import { MdFace } from "react-icons/md";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateRegisteration = ({ history }) => {
  const [show, setShow] = useState("yes");
  const [installation, setInstallation] = useState("");
  const sidebarTab = useRef(null);

  const installations = [0, 1, 2, 3, 4, 5, 6];

  const { RID } = useParams();
  const { PRID } = useParams();
  const { CID } = useParams();

  const createPropertyRegisteration = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/registeration/put/${RID}`, {
        installation,
      })
      .then((response) => {
        // console.log(response);
        history.push("/admin/dashboard");
        toast.success("Record Updated successfully");
      })
      .catch((err) => console.log(err.response.data));
  };

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

  const [user, setUser] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/user/me/${CID}`)
      .then((res) => setUser({ ...res.data[0] }));
  }, [CID]);

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
                <div className="BookingCont">
                  <div className="bookingBox">
                    <h1 className="bookingHeading">Book Your Project</h1>
                    <h3 className="bookingSubHeading">Make a safe future!</h3>

                    <form
                      className="bookingForm"
                      encType="multipart/form-data"
                      onSubmit={createPropertyRegisteration}
                    >
                      <div className="bookingName">
                        <MdFace />
                        <input
                          type="text"
                          placeholder="Customer ID"
                          value={`Customer ID: ${CID}`}
                          required
                          name="name"
                          readOnly
                        />
                      </div>

                      <div className="bookingName">
                        <MdFace />
                        <input
                          type="text"
                          placeholder="Project ID"
                          required
                          name="name"
                          value={`Project ID: ${PRID}`}
                          readOnly
                        />
                      </div>

                      <div className="bookingEmail">
                        <label for="installments"> Installments </label>
                        <select
                          onChange={(e) => setInstallation(e.target.value)}
                        >
                          <option value="">Choose Installation</option>
                          {installations.map((cate) => (
                            <option key={cate} value={cate}>
                              {cate}
                            </option>
                          ))}
                        </select>
                      </div>

                      <input
                        type="submit"
                        value="Confirm Boooking"
                        className="bookingBtn"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
      )}
    
  

export default UpdateRegisteration;