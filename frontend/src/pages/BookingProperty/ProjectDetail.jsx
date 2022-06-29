import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import "./ProjectDetail.css";

const ProjectDetail = () => {
    const property= {
      _id : 1,
      image: "/back.jpg",
      title: "Saima Paradise",
      installments: "6 months",
      condition: "Under construction"
  };
    

  return (
    
    <div className='projectCard'>
       <div className="project-head">
          <h1>Thank You for showing interest in <br/>Booking a House <span className='yellow-color' style={{textAlign: "center"}}>With Us!</span></h1>
          </div>
        <h2 className='projDet-heading'>{property.title}</h2>
        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={property.image}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={property.image}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={property.image}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<div className="project-detail">
<p className='projDet-para'><span className='projDet-label'>Installments available: </span>{property.installments}</p>
<p className='projDet-para'><span className='projDet-label'>Condition: </span>{property.condition}</p>
<Link to="/book-property" style={{textDecoration: "none"}}><button className='projDet-btn'>
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
        </button></Link>
</div>
    </div>
  
     
     
    )
};
  

export default ProjectDetail;