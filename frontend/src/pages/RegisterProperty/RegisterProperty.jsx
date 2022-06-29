import React
// , { useState }
 from "react";
import "./RegisterProperty.css";
import { GoAlert } from "react-icons/go";

const RegisterProperty = () => {
  // const dispatch = useDispatch();
  // const alert = useAlert();

  // const { loading, error, success } = useSelector((state) => state.newProduct);

  // const [name, setName] = useState("");
  // const [price, setPrice] = useState(0);
  // const [description, setDescription] = useState("");
  // const [category, setCategory] = useState("");
  // const [Stock, setStock] = useState(0);
  // const [images, setImages] = useState([]);
  // const [imagesPreview, setImagesPreview] = useState([]);


  // useEffect(() => {
  //   if (error) {
  //     alert.error(error);
  //     dispatch(clearErrors());
  //   }

  //   if (success) {
  //     alert.success("Product Created Successfully");
  //     history.push("/admin/dashboard");
  //     dispatch({ type: NEW_PRODUCT_RESET });
  //   }
  // }, [dispatch, alert, error, history, success]);

  const createPrpertySubmitHandler = (e) => {
    e.preventDefault();

    // const myForm = new FormData();

    // myForm.set("name", name);
    // myForm.set("price", price);
    // myForm.set("description", description);
    // myForm.set("category", category);
    // myForm.set("Stock", Stock);

    // images.forEach((image) => {
    //   myForm.append("images", image);
    // });
    // dispatch(createProduct(myForm));
  };

  const createPropertyImagesChange = (e) => {
    // const files = Array.from(e.target.files);

    // setImages([]);
    // setImagesPreview([]);

    // files.forEach((file) => {
    //   const reader = new FileReader();

    //   reader.onload = () => {
    //     if (reader.readyState === 2) {
    //       setImagesPreview((old) => [...old, reader.result]);
    //       setImages((old) => [...old, reader.result]);
    //     }
    //   };

    //   reader.readAsDataURL(file);
    // });
  };






  return (
    <div className="regProperty">
      <div className="propRegform">
        <form encType="multipart/form-data" onSubmit={createPrpertySubmitHandler}>
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

              <p>Location:</p>
            </div>

            <div className="regProp-con2">
              {/* Purpose */}
              <select>
                <option>Sell</option>
                <option>Rent</option>
              </select>

              {/* Property Type */}
              <select>
                <option>Home</option>
                <option>Plots</option>
                <option>Commercial</option>
              </select>

              {/* City */}
              <input type="text" />

              {/* Location */}
              <input type="text" style={{ width: "300px" }} />
            </div>
          </div>

          <span className="regProp-span">PROPERTY DETAILS</span>
          <div className="regProp-container">
            <div className="regProp-con1">
              <p>Property Title:</p>

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
              <input type="text" style={{ width: "300px" }} />

              {/* Description */}
              <textarea />
              <br />

              {/* Price */}
              <input type="text" style={{ width: "250px" }} />

              <p className="reg-prop-alert">Price must contain numbers only</p>

              <div className="reg-prop-area-unit" style={{ marginTop: "10px" }}>
                {/*  Land Area  */}
                <input type="text" />

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
            {/* {imagesPreview.map((image, index) => (
              <img key={index} src={image} alt="Product Preview" />
            ))} */}
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
