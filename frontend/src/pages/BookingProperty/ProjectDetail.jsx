




import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
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
        <h1>Thank You for showing interest in <br/><span className='yellow-color' style={{textAlign: "center"}}>In booking a project</span></h1>
        <p>{property.title}</p>
        <Carousel className='carousel'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="back.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="back.jpg"
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
      src="back.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  
     
     
    )
};
  

export default ProjectDetail;