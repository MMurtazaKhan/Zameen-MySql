import React, { useEffect, useState } from "react";
// import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import "./ProjectDetail.css";
import { useParams } from "react-router-dom";
import axios from "axios";


const ProjectDetail = ({ match }) => {
  const [project, setProject] = useState({});

  const { PRID } = useParams();
  // console.log(PRID);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/project/${PRID}`)
      .then((res) => setProject({ ...res.data[0] }));
  }, [PRID]);

  return (
    <div className="projectCard">
      <div className="project-head">
        <h1>
          Thank You for showing interest in <br />
          Booking a House{" "}
          <span className="yellow-color" style={{ textAlign: "center" }}>
            With Us!
          </span>
        </h1>
      </div>
      <h2 className="projDet-heading">{project.name}</h2>
      <img src={project.image} />

      {/* <h2 className="projDet-para">{project.description}</h2> */}
      {/* <div className="sell-detail-carousal"> */}
        {/* <Carousel fade className="project-carousel">
          {project.images &&
            project.images.map((item, i) => (
              <Carousel.Item>
                <img
                  className="d-block w-100 CarouselImage"
                  key={i}
                  src={item.url}
                  alt={`${i} Slide`}
                />
                <Carousel.Caption>
                  <h3>{item.projectName}</h3>
                  <p>{`${item.landArea} Sq. yards`}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
        </Carousel> */}
      {/* </div> */}

      <div className="project-detail">
        <p className="projDet-para">
          <span className="projDet-label">Total Capacity :</span>
          {project.total}
        </p>
        <p className="projDet-para">
          <span className="projDet-label">Monthly Installation: </span>
          {project.monthly_installment}
        </p>
        <p className="projDet-para">
          <span className="projDet-label">City: </span>
          {project.city}
        </p>
        <p className="projDet-para">
          <span className="projDet-label">Location: </span>
          {project.location}
        </p>
        <p className="projDet-para">
          <span className="projDet-label">Start Date: </span>
          {project.start_time}
        </p>
        <p className="projDet-para">
          <span className="projDet-label">End Date: </span>
          {project.end_time}
        </p>
        <Link
          to={`/book-property/${project.PRID}`}
          style={{ textDecoration: "none" }}
        >
          <button className="projDet-btn">
            Book Now{" "}
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
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
