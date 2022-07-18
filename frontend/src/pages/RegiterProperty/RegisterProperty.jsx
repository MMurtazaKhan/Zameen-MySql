import React, { useState, useEffect } from "react";
import "./RegisterProperty.css";
import { GoAlert } from "react-icons/go";

import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";




const RegisterProperty = () => {
  
  const CID=localStorage.getItem("CID");

  // console.log("The value of cid recieved is ", CID);
  // console.log("The value of cid recieved is ");




  const history = useHistory();

  const purposeCategories = ["Sell", "Rent"];

  const pTypeCategories = ["Home", "Plots", "Commercial"];

  const [purpose, setPurpose] = useState("");
  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [area, setArea] = useState("");
  const [ownerContact, setOwnerContact] = useState("");
  const [description, setDescription] = useState("");


  // const [images, setImages] = useState([]);
  // const [imagesPreview, setImagesPreview] = useState([]);
  // const [ownerName, setOwnerName] = useState("");

  const createPropertySubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/property/me", {
        CID: CID,
        purpose: purpose,
        type: type,
        city: city,
        address: address,
        price: price,
        area: area,
        contact: ownerContact,
        description: description,
      })
      .then((response) => {
        console.log(response);

        history.push("/");
      toast.success("Contact Added Successfully");

      });

    // const myForm = new FormData();

    // myForm.set("purpose", purpose);
    // myForm.set("propertyType", propertyType);
    // myForm.set("city", city);
    // myForm.set("address", address);
    // myForm.set("propertyTitle", propertyTitle);
    // myForm.set("description", description);
    // myForm.set("price", price);
    // myForm.set("landArea", landArea);
    // myForm.set("ownerName", ownerName);
    // myForm.set("ownerContact", ownerContact);

    // images.forEach((image) => {
    //   myForm.append("images", image);
    // });
    // dispatch(createProperty(myForm));
  };

  //   const createPropertyImagesChange = (e) => {
  //     const files = Array.from(e.target.files);

  //     setImages([]);
  //     setImagesPreview([]);

  //     files.forEach((file) => {
  //       const reader = new FileReader();

  //       reader.onload = () => {
  //         if (reader.readyState === 2) {
  //           setImagesPreview((old) => [...old, reader.result]);
  //           setImages((old) => [...old, reader.result]);
  //         }
  //       };

  //       reader.readAsDataURL(file);
  //     });
  //   };

  return (
    <div className="regProperty">
      <div className="propRegform">
        <form
          encType="multipart/form-data"
          onSubmit={createPropertySubmitHandler}
        >
          <div className="regProp-head">
            <h2
              style={{
                fontSize: "1.4rem",
                marginTop: "20px",
                color: "#207d22",
                fontWeight: "600",
              }}
            >
              Add a Property
            </h2>
          </div>

          <span className="regProp-span">PROPERTY TYPE AND LOCATION</span>

          <div className="regProp-container">
            <div className="regProp-con1">
              <p>Purpose:</p>

              <p>Property Type:</p>

              <p>City:</p>

              <p>address:</p>
            </div>

            <div className="regProp-con2">
              {/* Purpose */}

              <select onChange={(e) => setPurpose(e.target.value)}>
                <option value="">Choose Category</option>
                {purposeCategories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>

              {/* Property Type */}

              <select onChange={(e) => setType(e.target.value)}>
                <option value="">Choose property type</option>
                {pTypeCategories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>

              {/* City */}
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />

              {/* Location */}
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={{ width: "300px" }}
              />
            </div>
          </div>

          <span className="regProp-span">PROPERTY DETAILS</span>
          <div className="regProp-container">
            <div className="regProp-con1">
              {/* <p>Property Title:</p> */}

              <p>Description:</p>

              <br />
              <br />
              <br />

              <p style={{ marginTop: "10px" }}>Price (PKR):</p>

              <br />
              <br />

              <p style={{ marginTop: "10px" }}>Land Area:</p>

              {/* <p>Units:</p> */}
            </div>

            <div className="regProp-con2">
              {/* Property Title */}
              {/* <input
                type="text"
                value={propertyTitle}
                onChange={(e) => setPropertyTitle(e.target.value)}
                style={{ width: "300px" }}
              /> */}

              {/* Description */}
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <br />

              {/* Price */}
              <input
                type="text"
                style={{ width: "250px" }}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />

              <p className="reg-prop-alert">Price must contain numbers only</p>

              <div className="reg-prop-area-unit" style={{ marginTop: "10px" }}>
                {/*  Land Area  */}
                <input
                  type="text"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                />

                {/*  Unit   */}
                <p style={{ marginLeft: "20px", marginRight: "10px" }}>
                  Units:
                </p>

                <input type="text" value="sq yd" readOnly />
              </div>
            </div>
          </div>

          {/* <span className="regProp-span">ADD IMAGES</span>

          <div className="regProp-container">
            <div className="regProp-con2">
              <div id="createProductFormFile">
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={createPropertyImagesChange}
                  multiple
                />
              </div>

              <p
                className="reg-prop-alert"
                style={{
                  width: "500px",
                  fontSize: "0.8rem",
                  marginTop: "10px",
                }}
              >
                <span>
                  <GoAlert
                    style={{ fontSize: "1.2rem", paddingRight: "5px" }}
                  />
                </span>
                Press CTRL key while selecting images to upload multiple images
                at once
              </p>
            </div>
          </div>
          <div id="createProductFormImage">
            {imagesPreview.map((image, index) => (
              <img key={index} src={image} alt="Product Preview" />
            ))}
          </div> */}

          <span className="regProp-span">PROPERTY DETAILS</span>
          <div className="regProp-container">
            <div className="regProp-con1">

              <p>Owner Contact:</p>
            </div>

            <div className="regProp-con2">
              {/* Owner Name */}
              {/* <input
                type="text"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                style={{ width: "300px" }}
                readOnly
              />
              <br /> */}
              {/* Owner Contact */}
              <input
                type="text"
                value={ownerContact}
                onChange={(e) => setOwnerContact(e.target.value)}
                style={{ width: "300px" }}
                
              />
            </div>
          </div>

          <div className="regProp-container">
            <button>SUBMIT PROPERTY</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterProperty;
