import React, { useRef, useState } from "react";
import "./Header.css";
// import logo from "../images/Home-logo.png";
import { MdSettings } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { Link, useHistory} from "react-router-dom";
import Button from "react-bootstrap/Button";
import { AiOutlineLogout } from "react-icons/ai";
import { toast } from "react-toastify";

const Header = () => {

  const mobile = window.innerWidth <= 574 ? true : false
  const [menuopened, setMenuopened] = useState(false);

  const CID = localStorage.getItem("CID");
  const history = useHistory();

  const removeUser = () => {
    localStorage.removeItem("CID");
    toast.success("User Logout successfully");
  };

  const text = "BUY >";
  const headerTab = useRef(null);
  const [show, setShow] = useState("yes");

  const switchTabs = (e, tab) => {
    if (tab === "yes") {
      headerTab.current.classList.add("null-container");
      headerTab.current.classList.remove("header-collapse");
      setShow("no");
    } else {
      headerTab.current.classList.add("header-collapse");
      headerTab.current.classList.remove("null-container");
      setShow("yes");
    }
  };



  return (
    <div className="mainHeader">
      {(menuopened === false && mobile === true) ? (
                <div className='barsNav' onClick={() => { setMenuopened(true) }} ><img style={{ height: '1.5rem', width: '1.9rem', }} src="/barz.png" alt="" /></div>
            ) :
    <div className="Header">
      <div className="Header-1">
        <div className="left-Container">
          <img src="/Home-logo.png" alt="Home-logo" />
        </div>
        <div className="center-Container">
          <ul>
            <li>
              <Link className="Link-tag" to="" onClick={() => { setMenuopened(false) }}>
                HOME
              </Link>
            </li>
            {/* <li><Link className="Link-tag" to="" >SERVICES</Link></li> */}
            <li>
              <Link className="Link-tag" to="/Blog" onClick={() => { setMenuopened(false) }}>
                BLOG
              </Link>
            </li>

            <li>
              <Link className="Link-tag" to="/About" onClick={() => { setMenuopened(false) }}>
                ABOUT
              </Link>{" "}
            </li>

            <li>
              <Link className="Link-tag" to="/contact" onClick={() => { setMenuopened(false) }}>
                CONTACT
              </Link>
            </li>

            {/* <CheckUser /> */}
          </ul>
        </div>
        <div className="right-Container">
          <input
            type="button"
            value="+ Add Property"
            onClick={() => history.push("/reg-property")}
          />
          <img src="/pak-flag.png" alt="Pak Flag" />
          <Link
            style={{
              color: "white",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
            // to={`/profile/${CID}`}
            to="/profile"

          >
            {/* <Link style={{ color: "white", paddingLeft: "10px" }} to="/register">
            {" "}
            <MdAccountCircle style={{ fontSize: "30px" }} />
          </Link> */}{" "}
            <MdSettings style={{ fontSize: "30px" }} />
          </Link>

          {CID ? (
            <Button
              variant="dark"
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "3px",
                height: "35px",
              }}
              onClick={() => removeUser()}
            >
              LogOut <AiOutlineLogout style={{ marginLeft: "5px" }} />
            </Button>
          ) : (
            ""
          )}
          {/* {CID ? (
            <button
              style={{
                borderRadius: "10px",
                fontSize: "13px",
                backgroundColor: "lightyellow",
                color: "white",
                border: "none",
                // font: "300 0.9vmax Roboto"
              }}
              onClick={() => removeUser()}
            >
              LogOut
            </button>
          ) : (
            ""
          )} */}
          <Link style={{ color: "white", paddingLeft: "10px" }} to="/register">
            {" "}
            <MdAccountCircle style={{ fontSize: "30px" }} />
          </Link>
        </div>
      </div>

      <div className="Header-2">
        <div className="left-header">
          <div className="first">
            <img
              src=""
              // "zameen.jpeg"
              alt="Zameen-logo"
            />
          </div>
          <div className="second">
            <h2>zameen.com</h2>
            <h4>Har Pata Hamein Pata hai</h4>
          </div>
        </div>
        <div className="right-header">
          <div className="header-collapse" onClick={(e) => switchTabs(e, show)}>
            <h4>{text} </h4>
          </div>
          <div className="options" ref={headerTab}>
            <ul>
              <li className="Link-tagg">
                <Link className="link-rem" to="/sell">
                  HOMES
                </Link>
              </li>
              <li className="Link-tagg">
                <Link className="link-rem" to="/projects">
                  PROJECTS
                </Link>
              </li>
              {/* <li>COMMERCIAL</li> */}
            </ul>
          </div>
          <div className="extends">
            <ul>
              <li className="Link-tagg">
                <Link className="link-rem" to="/sell">
                  RENT
                </Link>
              </li>
              <li className="Link-tagg">
                <Link
                  className="link-rem"
                  onClick={() => history.push("/book-property")}
                >
                  BOOK PROJECT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
}
    </div>
  );
};

export default Header;

// import React, {useRef, useState} from "react";
// import "./Header.css";
// // import logo from "../images/Home-logo.png";
// import { Settings } from "@material-ui/icons";
// import { AccountCircle } from "@material-ui/icons";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const text = "BUY >";
//   const optionTab = useRef(null);
//   const [show, setShow] =useState("yes");

//   const switchTabs = (e, tab) =>{

//     if(tab === "yes"){
//     optionTab.current.classList.add("null-container");
//     optionTab.current.classList.remove("collapse");
//     setShow("no");
//     }
//     else{
//       optionTab.current.classList.add("collapse");
//       optionTab.current.classList.remove("null-container");
//       setShow("yes");
//     }
//   }

//   return (
//     <div className="Header">
//       <div className="Header-1">
//         <div className="left-Container">
//           <img src="/Home-logo.png" alt="Home-logo" />
//         </div>
//         <div className="center-Container">
//           <ul>
//             <li>HOME</li>
//             <li>SERVICES</li>
//             <li>BLOG</li>
//             <li>ABOUT</li>
//             <li>CONTACT</li>
//           </ul>
//         </div>
//         <div className="right-Container">
//           <input type="button" value="+ Add Property" />
//           <img src="/pak-flag.png" alt="Pak Flag" />
//         <Link style={{color:"white",paddingLeft:"10px", paddingRight:"10px"}}> <Settings style={{ fontSize: "30px" }} /></Link>
//          <Link style={{color:"white", paddingLeft:"10px"}} to="/register">  <AccountCircle style={{ fontSize: "30px" }} /></Link>
//         </div>
//       </div>

//       <div className="Header-2">
//         <div className="left-header">
//           <div className="first">
//             <img src="z.jpeg" alt="Zameen-logo" />
//           </div>
//           <div className="second">
//             <h2>zameen.com</h2>
//             <h4>Har Pata Hamein Pata hai</h4>
//           </div>
//         </div>
//         <div className="right-header">
//           <div className="collapse" onClick={(e) => switchTabs(e, show)}>
//             <h4>{text} </h4>
//           </div>
//           <div className="options" ref={optionTab}>
//             <ul>
//               <li>HOMES</li>
//               <li>PLOT</li>
//               <li>COMMERCIAL</li>
//             </ul>
//           </div>
//           <div className="extends">
//             <ul>
//               <li>RENT</li>
//               <li>PROJECT</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
