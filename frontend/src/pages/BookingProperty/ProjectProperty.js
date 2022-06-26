import React from 'react'
import Project from './Project'


const ProjectProperty = () => {
    const property = [
        {
            _id : 1,
            image: "/back.jpg",
            title: "Saima Paradise",
            installments: "6 months",
            condition: "Under construction"
        },
        {
            _id : 2,
            image: "/back.jpg",
            title: "Saima Lake",
            installments: "6 months",
            condition: "Under construction"
        },
        {
            _id : 3,
            image: "/back.jpg",
            title: "Emaar Paradise",
            installments: "6 months",
            condition: "Under construction"
        },
        {
            _id : 4,
            image: "/back.jpg",
            title: "Bahria Paradise",
            installments: "6 months",
            condition: "Under construction"
        },

    ]
  return (
    <div>
        <h1 className="project-heading" style={{textAlign: "center"}}>Projects</h1>
        <h3 className="project-heading" style={{textAlign: "center"}}>Book the amazing under construction projects and secure your future now!</h3>
            
        { property && property.map(( property )=>(
            <Project key={property._id} property = {property}/>
        )) }
    </div>
  )
}

export default ProjectProperty;