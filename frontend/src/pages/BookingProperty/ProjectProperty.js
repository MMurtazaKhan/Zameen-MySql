
import Project from './Project'
import "./ProjectDetail.css";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { clearErrors, getProject } from '../../actions/projectAction';
import { useAlert } from 'react-alert';

const ProjectProperty = () => {
  const alert = useAlert();
    const dispatch = useDispatch();
  const {
    // loading,
    error,
    // projectCount,
    // resultPerPage,
    project,
    // filteredProjectCount,
  } = useSelector((state) => state.project);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProject());
  }, [dispatch, error, alert]);

    // const property = [
    //     {
    //         _id : 1,
    //         image: "/back.jpg",
    //         title: "Saima Paradise",
    //         installments: "6 months",
    //         condition: "Under construction"
    //     },
    //     {
    //         _id : 2,
    //         image: "/back.jpg",
    //         title: "Saima Lake",
    //         installments: "6 months",
    //         condition: "Under construction"
    //     },
    //     {
    //         _id : 3,
    //         image: "/back.jpg",
    //         title: "Emaar Paradise",
    //         installments: "6 months",
    //         condition: "Under construction"
    //     },
    //     {
    //         _id : 4,
    //         image: "/back.jpg",
    //         title: "Bahria Paradise",
    //         installments: "6 months",
    //         condition: "Under construction"
    //     },

    // ]
  return (
    <div>
        <div className='project-head'>
        <h1 className="project-heading" style={{color: "wheat", fontSize: "45px"}}>Projects</h1>
        <h3 className="project-heading" style={{color: "wheat", fontSize: "35px"}}>Book the amazing under <span className='yellow-color'>construction projects</span>  and secure your future now!</h3>
        </div>
        { project && project.map(( property )=>(
            
            <Project key={property._id } property = {property}/>
        )) }
    </div>
  )
}

export default ProjectProperty;