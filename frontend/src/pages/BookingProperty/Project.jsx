import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";
import { BsArrowRight } from "react-icons/bs";

const Project = ({ property }) => {
  return (
    <div className="projectCont">
      <div className="project-cards">
        <Link className="project-link" to={`/projectDetail/${property._id}`}>
          <div className="project-card">
            <img className="project-img" src={property.images[0].url} alt="" />
            <div className="project-data">
              <h5 className="project-heading">Project ID</h5>
              <p className="project-para">{property._id}</p>
              <h5 className="project-heading">Project Name</h5>
              <p className="project-para">{property.projectName}</p>
              <h5 className="project-heading">Address</h5>
              <p className="project-para">{`${property.city}, ${property.location}`}</p>
              <h5 className="project-heading">Price</h5>
              <p className="project-para">{property.price}</p>
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
