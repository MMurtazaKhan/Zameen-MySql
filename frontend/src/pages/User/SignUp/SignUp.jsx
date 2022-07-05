import React, { useRef, useEffect, useState, Fragment } from "react";
import "./SignUp.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";
import { Phone } from "@material-ui/icons";
// import {PersonIcon} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, register
  , login 
} from "../../../actions/userAction";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";

const SignUp = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const {
    error,
    //  loading,
    isAuthenticated,
  } = useSelector((state) => state.user);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phoneNo: "",
  });

  const { name, email, password, phoneNo } = user;

  const [avatar, setAvatar] = useState("/Profile.png");
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("phoneNo", phoneNo);
    myForm.set("avatar", avatar);
    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });

    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
   };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      history.push("/sss");
    }
  }, [dispatch, error, alert, history, isAuthenticated]);

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
            onSubmit={registerSubmit}
          >
            <div className="signUpName">
              <FaceIcon />

              <input
                type="text"
                placeholder="Name"
                required
                name="name"
                value={name}
                onChange={registerDataChange}
              />
            </div>

            <div className="signUpEmail">
              <MailOutlineIcon />
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={email}
                onChange={registerDataChange}
              />
            </div>

            <div className="signUpPassword">
              <LockOpenIcon />
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                value={password}
                onChange={registerDataChange}
              />
            </div>

            <div className="signUpPassword">
              <Phone />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                name="phoneNo"
                // pattern="[0-9]{3}-[0-9]{2}-[0-9]-{3}"
                value={phoneNo}
                onChange={registerDataChange}
              />
            </div>

            <div id="registerImage">
              <img src={avatarPreview} alt="Avatar Preview" />
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={registerDataChange}
              />
            </div>
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
              <MailOutlineIcon />
              <input
                type="email"
                placeholder="Email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div className="loginPassword">
              <LockOpenIcon />
              <input
                type="password"
                placeholder="Password"
                required
                value={loginPassword}
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
