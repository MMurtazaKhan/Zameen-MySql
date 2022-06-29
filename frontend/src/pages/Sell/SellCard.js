import React from 'react'
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { FaRulerVertical } from "react-icons/fa";

// import "./Sell.css";


const SellCard = ({ property }) => {
   
  return (
    <Link className="propertyCard" to={`/sellDetail/${property._id}`}>
    <div className="property-img-container">
      <img src={property.image} alt="sellimage" />
    </div>
    <div className="property-card-contact">
      <div className="sell-card-icons">
        <img src="./verification.jpg" alt="sellimage" />
        <p style={{ marginTop: "10px", paddingLeft: "10px" }}>
          {(property.views)}
        </p>
      </div>
      <h3>
        PKR <span> {property.price}</span>
      </h3>

 
      <p>{`${property.address}, ${property.city}`}</p>


      <span>
        {" "}
        <FaRulerVertical style={{ color: "yellowgreen" }} /> {property.landArea} Sq.Yd
      </span>

      <div className="sell-card-description">
        <h4>{property.propertyTitle}</h4>
        <p>
          {property.description}
        </p>
      </div>

      <h4>{property.createdAt}</h4>

      <div className="sell-card-footer">
        <button>
          View more{" "}
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
        
    
  )
}

export default SellCard;


