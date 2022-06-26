
// Fake

import React,{useEffect} from "react";
import "./Profile.css";
import { useHistory } from "react-router-dom";

const Profile = () => {

const history = useHistory();

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 2,
      }}
    />
  );

  return (
    <div className="profileContainer">
      <div className="profile-design"></div>
      <h1 className="profile-heading" >My Profile</h1>
      <div className="profile-main">
        <div className="profile-sideDesign"></div>

        <div className="userImgCont">
          <img
            src="/profile.png"
            alt="user image"
            style={{ Height: "100px", width: "100px" }}
          />
          <button className="btn btn-warning btn-lg" onClick={() =>history.push("/EditProfile")}>Edit Profile</button>
        </div>

        <div className="userInfoCont">
          <h2 style={{ textDecoration: "underline" }}>Basic Info</h2>

          <div id="profileLabelId" className="profile-label">
            <h4>Full Name</h4>
            <p>user</p>
            <ColoredLine color="black" />
          </div>

          <div className="profile-label">
            <h4>Email</h4>
            <p>user@gmail.com</p>
            <ColoredLine color="black" />
          </div>

          <div className="profile-label">
            <h4>Phone No</h4>
            <p>328498234798</p>
            <ColoredLine color="black" />
          </div>

          <div className="profile-label">
            <h4>Joined On</h4>
            <p>1-6-2022</p>
            <ColoredLine color="black" />
          </div>
        </div>

        <div className="profile-sideDesign"></div>
      </div>
    </div>
  );
};

export default Profile;
























// Real 


// import React,{useEffect} from "react";
// import "./Profile.css";
// import { useHistory } from "react-router-dom";

// import { useSelector } from "react-redux";

// const Profile = ({ history }) => {

  // const history = useHistory();


//     const { user,
//       //  loading,
//         isAuthenticated } = useSelector((state) => state.user);

//     useEffect(() => {
//         if (isAuthenticated === false) {
//           history.push("/register");
//         }
//       }, [history, isAuthenticated]);


//   const ColoredLine = ({ color }) => (
//     <hr
//       style={{
//         color: color,
//         backgroundColor: color,
//         height: 2,
//       }}
//     />
//   );

//   return (

//     <div className="profileContainer">
//       <div className="profile-design"></div>
//       <h1>My Profile</h1>
//       <div className="profile-main">
//         <div className="profile-sideDesign"></div>

//         <div className="userImgCont">
//           <img
//             src={user.avatar.url}
//             alt="user-pic"
//             style={{ Height: "100px", width: "100px" }}
//           />
//           <button className="btn btn-warning btn-lg" onClick={() =>history.push("/EditProfile")}>Edit Profile</button>
//         </div>

//         <div className="userInfoCont">
//           <h2 style={{ textDecoration: "underline" }}>Basic Info</h2>

//           <div id="profileLabelId" className="profile-label">
//             <h4>Full Name</h4>
//             <p>{user.name}</p>
//             <ColoredLine color="black" />
//           </div>

//           <div className="profile-label">
//             <h4>Email</h4>
//             <p>{user.email}</p>
//             <ColoredLine color="black" />
//           </div>

//           <div className="profile-label">
//             <h4>Phone No</h4>
//             <p>{user.phoneNo}</p>
//             <ColoredLine color="black" />
//           </div>

//           <div className="profile-label">
//             <h4>Joined On</h4>
//             <p>{String(user.createdAt).substr(0, 10)}</p>
//             <ColoredLine color="black" />
//           </div>
//         </div>

//         <div className="profile-sideDesign"></div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
