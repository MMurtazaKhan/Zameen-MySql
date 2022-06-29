import React from "react";
import "./Sell.css";
import Search from "../../components/Search/Search";
import { IoReloadSharp } from "react-icons/io5";
import SellCard from "./SellCard";
// import { Link } from "react-router-dom";
// import { BsArrowRight } from "react-icons/bs";
// import { FaRulerVertical } from "react-icons/fa";

const Sell = () => {
  const property = [
    {
      _id: 1,
      image: "/s1.jpg",
      views: 4,
      price: 45000,
      address: "House-No:210 near azizabad malir",
      city: "Karachi",
      landArea: "200",
      propertyTitle: "This is property title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      createdAt: "14-7-22",
    },
    {
      _id: 2,
      image: "/s2.jpg",
      views: 18,
      price: 590000,
      address: "House-No:21 near shah faisal masjid",
      city: "Islamabad",
      landArea: "200",
      propertyTitle: "This is property title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      createdAt: "14-7-20",
    },
    {
      _id: 3,
      image: "/s1.jpg",
      views: 47,
      price: 760000,
      address: "House-No:210 near shalimar garden",
      city: "Lahore",
      landArea: "200",
      propertyTitle: "This is property title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      createdAt: "13-5-20",
    },
  ];

  return (
    <div>
      <div className="sellCards-head">
      <div className="sell-search-container">
        <Search />
      </div>
      </div>

      <div className="sell-container">
        <div className="sell-left">
          <div className="sell-left-head">
            <p>5 result found </p>
            <button>
              <IoReloadSharp />
            </button>
          </div>
          <div className="sell-left-body">
            {property &&
              property.map((property) => (
                <SellCard key={property._id} property={property} />
              ))}
          </div>
        </div>
        <div className="sell-right"></div>
      </div>
    </div>
  );
};

export default Sell;

