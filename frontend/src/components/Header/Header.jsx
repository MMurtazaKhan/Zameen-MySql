import React, {useRef, useState} from "react";
import "./Header.css";
// import logo from "../images/Home-logo.png";
import { Settings } from "@material-ui/icons";
import { AccountCircle } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Contact from "../../pages/Contact/Contact";




const Header = () => {
  const text = "BUY >";
  const optionTab = useRef(null);
  const [show, setShow] =useState("yes");

  const switchTabs = (e, tab) =>{

    if(tab === "yes"){
    optionTab.current.classList.add("null-container");
    optionTab.current.classList.remove("collapse");  
    setShow("no");
    }
    else{
      optionTab.current.classList.add("collapse");
      optionTab.current.classList.remove("null-container");  
      setShow("yes");
    }
  }

  return (
    <div className="Header">
      <div className="Header-1">
        <div className="left-Container">
          <img src="/Home-logo.png" alt="Home-logo" />
        </div>
        <div className="center-Container">
          <ul>
            <li><Link className="Link-tag" to="/" >HOME</Link></li>
            <li><Link className="Link-tag" to="/services" >SERVICES</Link></li>
            <li><Link className="Link-tag" to="/blog" >BLOG</Link></li>
            <li><Link className="Link-tag" to="/about" >ABOUT</Link></li>
            <li><Link className="Link-tag" to="/contact" >CONTACT</Link></li>
          </ul>
        </div>
        <div className="right-Container">
          <input type="button" value="+ Add Property" />
          <img src="/pak-flag.png" alt="Pak Flag" />
        <Link style={{color:"white",paddingLeft:"10px", paddingRight:"10px"}}> <Settings style={{ fontSize: "30px" }} /></Link>
         <Link style={{color:"white", paddingLeft:"10px"}} to="/register">  <AccountCircle style={{ fontSize: "30px" }} /></Link>
        </div>
      </div>

      <div className="Header-2">
        <div className="left-header">
          <div className="first">
            <img src="z.jpeg" alt="Zameen-logo" />
          </div>
          <div className="second">
            <h2>zameen.com</h2>
            <h4>Har Pata Hamein Pata hai</h4>
          </div>
        </div>
        <div className="right-header">
          <div className="collapse" onClick={(e) => switchTabs(e, show)}>
            <h4>{text} </h4>
          </div>
          <div className="options" ref={optionTab}>
            <ul>
              <li>HOMES</li>
              <li>PLOT</li>
              <li>COMMERCIAL</li>
            </ul>
          </div>
          <div className="extends">
            <ul>
              <li>RENT</li>
              <li>PROJECT</li>
            </ul>
          </div>
        </div>
      </div>
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