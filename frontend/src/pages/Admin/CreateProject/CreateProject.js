import React, { useState, useRef, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./CreateProject.css";
import { GiHamburgerMenu } from "react-icons/gi";
// import { Button } from "@material-ui/core";
// import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { AiOutlineCalendar, AiFillHome } from "react-icons/ai";
import { MdOutlineReduceCapacity } from "react-icons/md";
import { NEW_PROJECT_RESET } from "../../../constants/projectConstants";
import { useAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { clearErrors, createProject } from "../../../actions/projectAction";

const CreateProject = () => {
  const alert = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    // loading,
    error,
    success,
  } = useSelector((state) => state.newProject);

  const [projectName, setprojectName] = useState("");
  const [totalCap, settotalCap] = useState(0);
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [landArea, setLandArea] = useState(0);
  const [investors, setInvestors] = useState("");
  const [images, setImages] = useState([]);
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [imagesPreview, setImagesPreview] = useState([]);
  const [monthlyInstallations, setMonthlyInstallations] = useState();
  const [show, setShow] = useState("yes");

  const sidebarTab = useRef(null);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Project Created Successfully");
      history.push("/");
      dispatch({ type: NEW_PROJECT_RESET });
    }
  }, [dispatch, alert, error, history, success]);

  const createProjectSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("projectName", projectName);
    myForm.set("totalCap", totalCap);
    myForm.set("location", location);
    myForm.set("landArea", landArea);
    myForm.set("investors", investors);
    myForm.set("city", city);
    myForm.set("startTime", startTime);
    myForm.set("endTime", endTime);
    myForm.set("description", description);
    myForm.set("monthlyInstallations", monthlyInstallations);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(createProject(myForm));
  };

  const createProjectImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
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
              onSubmit={createProjectSubmitHandler}
            >
              <h1>Create Project</h1>

              <div>
                <SpellcheckIcon />
                <input
                  type="text"
                  placeholder="Project Name"
                  required
                  value={projectName}
                  onChange={(e) => setprojectName(e.target.value)}
                />
              </div>
              <div>
                <MdOutlineReduceCapacity />
                <input
                  type="number"
                  placeholder="total Capacity"
                  required
                  // value={totalCap}
                  onChange={(e) => settotalCap(e.target.value)}
                />
              </div>
              <div>
                <AttachMoneyIcon />
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  required
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              <div>
                <AttachMoneyIcon />
                <input
                  type="text"
                  placeholder="monthly installments"
                  value={monthlyInstallations}
                  required
                  onChange={(e) => setMonthlyInstallations(e.target.value)}
                />
              </div>

              <div>
                <AiFillHome />
                <input
                  type="text"
                  placeholder="Land Area"
                  // value={landArea}
                  required
                  onChange={(e) => setLandArea(e.target.value)}
                />
              </div>

              <div>
                <AiFillHome />
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  required
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div>
                <StorageIcon />
                <input
                  type="string"
                  placeholder="Investors"
                  value={investors}
                  required
                  onChange={(e) => setInvestors(e.target.value)}
                />
              </div>

              <label style={{ fontSize: "15px", color: "gray" }}>
                Start Date
              </label>
              <div>
                <AiOutlineCalendar />
                <input
                  type="date"
                  placeholder="Start Time"
                  value={startTime}
                  required
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </div>

              <label style={{ fontSize: "15px", color: "gray" }}>
                End Date
              </label>
              <div>
                <AiOutlineCalendar />

                <input
                  type="date"
                  placeholder="End Time"
                  value={endTime}
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
                  onChange={createProjectImagesChange}
                  multiple
                />
              </div>

              <div id="createProjectFormImage">
                {imagesPreview.map((image, index) => (
                  <img key={index} src={image} alt="Project Preview" />
                ))}
              </div>

              <button id="createProjectBtn" type="submit">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
