import React, { useRef, useEffect, useState, Fragment } from "react";
import "./SignUp.css";
import { AiFillMail } from "react-icons/ai";
import { BiLockOpen } from "react-icons/bi";
import { MdFace } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import {
  useHistory,
  // , useParams, Link
} from "react-router-dom";

import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
  name: "",
  email: "",
  contact: "",
  password: "",
};

const SignUp = ({ location }) => {
  const [state, setState] = useState(initialState);
  const { name, email, contact, password } = state;
  const history = useHistory();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact || !password) {
      toast.error("Please fill each field");
    } else {
      axios
        .post("http://localhost:5000/api/register", {
          name,
          email,
          contact,
          password,
        })
        .then(() => {
          setState({ name: "", email: "", contact: "", password: "" });
        })
        .catch((err) => toast.error(err.response.data));
      toast.success("Contact Added Successfully");
      setTimeout(() => history.push("/"), 500);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!name || !email || !contact || !password) {
  //     toast.error("Please fill each field");
  //   } else {
  //     if (!id) {
  //       axios
  //         .post("http://localhost:5000/api/register", {
  //           name,
  //           email,
  //           contact,
  //           password,
  //         })
  //         .then(() => {
  //           setState({ name: "", email: "", contact: "", password: "" });
  //         })
  //         .catch((err) => toast.error(err.response.data));
  //       toast.success("Contact Added Successfully");
  //     } else {
  //       axios
  //         .put(`http://localhost:5000/api/put/${id}`, {
  //           name,
  //           email,
  //           contact,
  //         })
  //         .then(() => {
  //           setState({ name: "", email: "", contact: "" });
  //         })
  //         .catch((err) => toast.error(err.response.data));
  //       toast.success("Contact Updated Successfully");
  //     }

  //     setTimeout(() => history.push("/"), 500);
  //   }
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  // const [user, setUser] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   phoneNo: "",
  // });
  // const { name, email, password, phoneNo } = user;

  const loginSubmit = (e) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      toast.error("Please fill each field");
    } else {
      axios
        .post("http://localhost:5000/api/login", {
          email: loginEmail,
          password: loginPassword,
        })
        .then((response) => {
          // console.log(response.data);
          console.log(response.data[0].CID);
          if (response.data[0].CID) {
            localStorage.removeItem("CID");
            localStorage.setItem("CID", JSON.stringify(response.data[0].CID));

          } else {
            localStorage.setItem("CID", JSON.stringify(response.data[0].CID));
          }
          // console.log
        });
    }
  };

  // const registerSubmit = (e) => {
  //   e.preventDefault();

  // const myForm = new FormData();

  // myForm.set("name", name);
  // myForm.set("email", email);
  // myForm.set("password", password);
  // myForm.set("phoneNo", phoneNo);
  // myForm.set("avatar", avatar);
  // dispatch(register(myForm));
  // };

  // const registerDataChange = (e) => {
  // setUser({ ...user, [e.target.name]: e.target.value });
  // if (e.target.name === "avatar") {
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     if (reader.readyState === 2) {
  //       setAvatarPreview(reader.result);
  //       setAvatar(reader.result);
  //     }
  //   };
  //   reader.readAsDataURL(e.target.files[0]);
  // } else {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // }
  // };

  // const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(
    () => {
      // if (error) {
      //   alert.error(error);
      //   dispatch(clearErrors());
      // }
      // if (isAuthenticated) {
      //   history.push("/");
      // }
    },
    [
      // dispatch, error, alert, history, isAuthenticated
    ]
  );

  const registerTab = useRef(null);
  const LoginTab = useRef(null);

  const shift = (e, tab) => {
    if (tab === "register") {
      registerTab.current.classList.remove("register");
      registerTab.current.classList.add("blank");

      LoginTab.current.classList.remove("blank");
      LoginTab.current.classList.add("login");
    }
    if (tab === "login") {
      LoginTab.current.classList.remove("login");
      LoginTab.current.classList.add("blank");

      registerTab.current.classList.remove("blank");
      registerTab.current.classList.add("register");
    }
  };

  return (
    <Fragment>
      {/* Register */}
      <div className="register" ref={registerTab}>
        <div className="left-reg">
          <h2>Welcome Back!</h2>
          <p>To keep connected with us please</p>
          <p>login with your personal info</p>
          <input
            type="button"
            value="SIGN IN"
            className="LoginBt"
            onClick={(e) => shift(e, "register")}
          />
        </div>

        <div className="right-reg">
          <h3>Create Account</h3>
          <form
            className="signUpForm"
            // ref={registerTab}
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <div className="signUpName">
              <MdFace />

              <input
                type="text"
                placeholder="Name"
                required
                name="name"
                value={name || ""}
                onChange={handleInputChange}
              />
            </div>

            <div className="signUpEmail">
              <AiFillMail />
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={email || ""}
                onChange={handleInputChange}
              />
            </div>

            <div className="signUpPassword">
              <BsFillTelephoneFill />
              <input
                type="tel"
                // type="text"
                placeholder="Phone Number"
                required
                name="contact"
                // pattern="[0-9]{3}-[0-9]{2}-[0-9]-{3}"
                value={contact || ""}
                onChange={handleInputChange}
              />
            </div>

            <div className="signUpPassword">
              <BiLockOpen />
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                value={password || ""}
                onChange={handleInputChange}
              />
            </div>

            {/* <div id="registerImage">
              <img src={avatarPreview} alt="Avatar Preview" />
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={registerDataChange}
              />
            </div> */}
            <input type="submit" value="Register" className="signUpBtn" />
          </form>
        </div>
      </div>

      {/* Login */}

      <div className="blank" ref={LoginTab}>
        <div className="left-login">
          <h3>Sign in to Zameen.com</h3>

          <form className="loginForm" onSubmit={loginSubmit}>
            <div className="loginEmail">
              <AiFillMail />
              <input
                type="email"
                placeholder="Email"
                required
                value={loginEmail || ""}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div className="loginPassword">
              <BiLockOpen />
              <input
                type="password"
                placeholder="Password"
                required
                value={loginPassword || ""}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <Link
              style={{
                color: "#47ac4a",
                display: "flex",
                float: "right",
                paddingTop: "15px",
              }}
              to="/password/forgot"
            >
              Forget Password ?
            </Link>
            <input type="submit" value="Login" className="loginBtn" />
          </form>
        </div>

        <div className="right-login">
          <h2>Hello, Friend!</h2>
          <p>Enter your personal details</p>
          <p>and start journey with us</p>
          <input
            type="button"
            value="SIGN UP"
            className="RegBt"
            onClick={(e) => shift(e, "login")}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default SignUp;
