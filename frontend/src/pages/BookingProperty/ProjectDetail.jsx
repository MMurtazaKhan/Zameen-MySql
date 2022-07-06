import React,{useEffect} from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import "./ProjectDetail.css";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, getProjectDetails } from "../../actions/projectAction";


const ProjectDetail = ({match}) => {

  
  const dispatch = useDispatch();
  const alert = useAlert();

  const { property, loading, error } = useSelector(
    (state) => state.projectDetails
  );

  //   const property= {
  //     _id : 1,
  //     image: "/back.jpg",
  //     title: "Saima Paradise",
  //     installments: "6 months",
  //     location: "Karachi",
  //     price: 10000,
  //     startDate: "2/03/22",
  //     endDate: "2/03/22",
  //     description:"this is description",
  //     condition: "Under construction"
  // };
    
  
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
  
    }
    dispatch(getProjectDetails(match.params.id));
  }, [dispatch, match.params.id, error, alert]);
  return (
    
    <div className='projectCard'>
       <div className="project-head">
          <h1>Thank You for showing interest in <br/>Booking a House <span className='yellow-color' style={{textAlign: "center"}}>With Us!</span></h1>
          </div>
        <h2 className='projDet-heading'>{property.projectName}</h2>
        <h2 className='projDet-para'>{property.description}</h2>
        <div className="sell-detail-carousal">

      <Carousel fade className="project-carousel">
        {property.images &&
          property.images.map((item, i) => (
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
      </Carousel>
          </div>

<div className="project-detail">
<p className='projDet-para'><span className='projDet-label'>Price: </span>{property.price}</p> 
<p className='projDet-para'><span className='projDet-label'>Installments available: </span>6 Months</p>
<p className='projDet-para'><span className='projDet-label'>City</span>{property.city}</p>
<p className='projDet-para'><span className='projDet-label'>Location: </span>{property.location}</p>
<p className='projDet-para'><span className='projDet-label'>Start Date: </span>{property.startTime}</p>
<p className='projDet-para'><span className='projDet-label'>End Date: </span>{property.endTime}</p>
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