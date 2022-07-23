import React, { useState, useRef, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./CreateProject.css";
import { GiHamburgerMenu } from "react-icons/gi";

import { MdDescription } from "react-icons/md";
import { MdOutlineStorage } from "react-icons/md";
import { FaSpellCheck } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";

import axios from "axios";
import { toast } from "react-toastify";

// import DescriptionIcon from "@material-ui/icons/Description";
// import StorageIcon from "@material-ui/icons/Storage";
// import SpellcheckIcon from "@material-ui/icons/Spellcheck";
// import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

import { AiOutlineCalendar, AiFillHome } from "react-icons/ai";
import { MdOutlineReduceCapacity } from "react-icons/md";
import { useHistory } from "react-router-dom";

import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const CreateProject = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [area, setArea] = useState("");
  const [start_time, setStartTime] = useState();
  const [end_time, setEndTime] = useState();
  const [investor, setInvestor] = useState("");
  const [total, setTotal] = useState("");
  const [monthly_installment, setInstallment] = useState("");
  const [image, setImage] = useState("");
  const [show, setShow] = useState("yes");

  // const [images, setImages] = useState([]);

  const [user, setUser] = useState("");
  const history = useHistory();

  const sidebarTab = useRef(null);

  // useEffect(() => {
  //   if (error) {
  //     alert.error(error);
  //     dispatch(clearErrors());
  //   }

  //   if (success) {
  //     alert.success("Project Created Successfully");
  //     history.push("/");
  //     dispatch({ type: NEW_PROJECT_RESET });
  //   }
  // }, [dispatch, alert, error, history, success]);

  const createProjectSubmitHandler = (e) => {
    e.preventDefault();

    // console.log(image.name);
    const imageRef = ref(storage, `images/${image.name + v4()}`);
    // console.log("hi");
    uploadBytes(imageRef, image).then(() => {
      getDownloadURL(imageRef)
        .then((url) => {
          // setURL(url);
          // uploadImage(url);

          axios
            .post("http://localhost:5000/api/project/new", {
              name: name,
              city: city,
              location: location,
              area: area,
              start_time: start_time,
              end_time: end_time,
              total: total,
              monthly_installment: monthly_installment,
              investor: investor,
              image: url,
            })
            .then((response) => {
              console.log(response);
              history.push("/");
              toast.success("Project Added Successfully");
            })
            .catch((error) => {
              console.log(error.message, "error getting the image url");
            });
        })
        .catch((error) => {
          console.log(error.message);
        });
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

  const handleFileChange = (e) => {
    // console.log(e.target.files[0]);
    // console.log("hoo")
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
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
              <div className="newProjectContainer">
                <form
                  className="createProjectForm"
                  encType="multipart/form-data"
                  onSubmit={createProjectSubmitHandler}
                >
                  <h1>Create Project</h1>

                  <div>
                    <FaSpellCheck />
                    <input
                      type="text"
                      placeholder="Project Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <MdOutlineReduceCapacity />
                    <input
                      type="number"
                      placeholder="total Capacity"
                      required
                      value={total}
                      onChange={(e) => setTotal(e.target.value)}
                    />
                  </div>
                  <div>
                    <MdOutlineAttachMoney />
                    <input
                      type="text"
                      placeholder="City"
                      value={city}
                      required
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>

                  <div>
                    <MdOutlineAttachMoney />
                    <input
                      type="text"
                      placeholder="monthly installments"
                      value={monthly_installment}
                      required
                      onChange={(e) => setInstallment(e.target.value)}
                    />
                  </div>

                  <div>
                    <AiFillHome />
                    <input
                      type="text"
                      placeholder="Land Area"
                      value={area}
                      required
                      onChange={(e) => setArea(e.target.value)}
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
                    <MdOutlineStorage />
                    <input
                      type="string"
                      placeholder="Investors"
                      value={investor}
                      required
                      onChange={(e) => setInvestor(e.target.value)}
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
                      value={start_time}
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
                      value={end_time}
                      required
                      onChange={(e) => setEndTime(e.target.value)}
                    />
                  </div>

                  <div id="createProjectFormFile">
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </div>

                  {/* <div id="createProjectFormFile">
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={createProjectImagesChange}
                  multiple
                />
              </div> */}

                  {/* <div id="createProjectFormImage">
                {imagesPreview.map((image, index) => (
                  <img key={index} src={image} alt="Project Preview" />
                ))}
              </div> */}

                  <button id="createProjectBtn" type="submit">
                    Create
                  </button>
                </form>
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

export default CreateProject;
