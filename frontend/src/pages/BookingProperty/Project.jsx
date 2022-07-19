import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";
import { BsArrowRight } from "react-icons/bs";

const Project = ({ project }) => {
  return (
    <div className="projectCont">
      <div className="project-cards">
        <Link className="project-link" to={`/projectDetail/${project.PRID}`}>
          <div className="project-card">
            {/* <img className="project-img" src={property.images[0].url} alt="" /> */}
            <img className="project-img" src="zameen.jpeg" alt="projectimage" />

            <div className="project-data">
              <h5 className="project-heading">Project ID</h5>
              <p className="project-para">{project.PRID}</p>
              <h5 className="project-heading">Project Name</h5>
              <p className="project-para">{project.name}</p>
              <h5 className="project-heading">Address</h5>
              <p className="project-para">{`${project.city}, ${project.location}`}</p>
              <h5 className="project-heading">Investor</h5>
              <p className="project-para">{project.investor}</p>
              <button className="project-btn">
                Details{" "}
                <span>
                  <BsArrowRight
                    style={{
                      marginLeft: "10px",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                  />
                </span>
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Project;
