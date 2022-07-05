

import React, { useState, useRef } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./CreateProject.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "@material-ui/core";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { AiOutlineCalendar, AiFillHome } from "react-icons/ai";


const CreateProject = () => {

  
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [landArea, setLandArea] = useState(0);
  const [units, setUnits] = useState("sq. ft");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
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
          <div className="newProjectContainer">
          <form
            className="createProjectForm"
            encType="multipart/form-data"
           
          >
            <h1>Create Project</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Project Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <AttachMoneyIcon />
              <input
                type="number"
                placeholder="Price"
                required
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div>
              <AiFillHome />
              <input
                type="number"
                placeholder="Land Area"
                required
                onChange={(e) => setLandArea(e.target.value)}
              />
            </div>

            <div>
              <StorageIcon/>
              <input
                type="text"
                placeholder="Units"
                required
                onChange={(e) => setUnits(e.target.value)}
              />
            </div>
              
            <label style={{fontSize: "15px", color: "gray"}}>Start Date</label>
            <div>
            
              <AiOutlineCalendar />
              <input
                type="date"
                placeholder="Start Time"
                required
                onChange={(e) => setStartTime(e.target.value)}
              />
              
            </div>

            <label style={{fontSize: "15px", color: "gray"}}>End Date</label>
            <div>
              <AiOutlineCalendar />
              
              <input
              
                type="date"
                placeholder="End Time"
                required
                onChange={(e) => setEndTime(e.target.value)}
              />
              
            </div>

            <div>
              <DescriptionIcon />

              <textarea
                placeholder="Project Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            

            <div id="createProjectFormFile">
              <input
                type="file"
                name="avatar"
                accept="image/*"
            
                multiple
              />
            </div>

            <div id="createProjectFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Project Preview" />
              ))}
            </div>

            <Button
              id="createProjectBtn"
              type="submit"

            >
              Create
            </Button>
          </form>
        </div> 
        </div> 
        </div> 
    </div>
  );
};

export default CreateProject;