import React, { useState } from "react";
import "./RegisterProperty.css";
import { GoAlert } from "react-icons/go";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const RegisterProperty = () => {
  const CID = localStorage.getItem("CID");

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
  const [image, setImage] = useState("");
  // const [url, setUrl] = useState("");
  // const [images, setImages] = useState([]);
  // const [imagesPreview, setImagesPreview] = useState([]);
  // const [ownerName, setOwnerName] = useState("");

  const createPropertySubmitHandler = (e) => {
    e.preventDefault();

    // console.log(image.name);
    const imageRef = ref(storage, `images/${image.name + v4()}`);
    // console.log("hi");
    uploadBytes(imageRef, image).then(() => {
      getDownloadURL(imageRef)
        .then((url) => {
          // setURL(url);
          // uploadImage(url);

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
              image: url,
            })
            .then((response) => {
              console.log(response);
              history.push("/");
              toast.success("Property Added Successfully");
            })
            .catch((error) => {
              console.log(error.message, "error getting the image url");
            });
        })
        .catch((error) => {
          console.log(error.message);
        });
    });
  };
  

  const handleFileChange = (e) => {
    // console.log(e.target.files[0]);
    // console.log("hoo")
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  
  return (
    <>
      {CID ? (
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

                  <p className="reg-prop-alert">
                    Price must contain numbers only
                  </p>

                  <div
                    className="reg-prop-area-unit"
                    style={{ marginTop: "10px" }}
                  >
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

              <span className="regProp-span">ADD IMAGES</span>

              <div className="regProp-container">
                <div className="regProp-con2">
                  <div id="createProductFormFile">
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      onChange={handleFileChange}
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
                    Press CTRL key while selecting images to upload multiple
                    images at once
                  </p>
                </div>
              </div>

     

              <span className="regProp-span">PROPERTY DETAILS</span>
              <div className="regProp-container">
                <div className="regProp-con1">
                  <p>Owner Contact:</p>
                </div>

                <div className="regProp-con2">
  
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
      ) : (
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <h1 style={{ fontSize: "20px" }}>
            you have no access ko access to this resource to access this please
            login first:
          </h1>
          <button
            style={{ width: "20%" }}
            className="btn btn-warning btn-lg"
            onClick={() => history.push("/register")}
          >
            Login Here
          </button>
        </div>
      )}
    </>
  );
};

export default RegisterProperty;
