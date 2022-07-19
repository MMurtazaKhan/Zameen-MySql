import React, { useEffect, useState } from "react";
import Project from "./Project";
import "./ProjectDetail.css";
import axios from "axios";

const ProjectProperty = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/projects");
    setData(response.data);
    console.log(response);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div className="project-head">
        <h1
          className="project-heading"
          style={{ color: "wheat", fontSize: "45px" }}
        >
          Projects
        </h1>
        <h3
          className="project-heading"
          style={{ color: "wheat", fontSize: "35px" }}
        >
          Book the amazing under{" "}
          <span className="yellow-color">construction projects</span> and secure
          your future now!
        </h3>
      </div>
      {data &&
        data.map((project) => <Project key={project.PRID} project={project} />)}
    </div>
  );
};

export default ProjectProperty;
