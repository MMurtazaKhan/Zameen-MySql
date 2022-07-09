// Real 


import React,{useEffect} from "react";
import "./Profile.css";
import { useHistory } from "react-router-dom";
import { logout } from "../../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";


// const CheckUser = () => {
//   const {
//     user,
//     //  loading,
//     // isAuthenticated
//   } = useSelector((state) => state.user);

//   if(user){
//     if(user.role === "admin"){
//       return (
//         <li>
//           <Link className="Link-tag" to="/admin/dashboard">
//             DASHBOARD
//           </Link>
//         </li>
//       );
//     }
//     if(user.role === "user"){
//       return (
//         <li>
//           <Link className="Link-tag" to="/profile">
//             DASHBOARD
//           </Link>
//         </li>
//       );
//     }
//   }else{
//     return (
//       <li>
//         <Link className="Link-tag" to="/register">
//           DASHBOARD
//         </Link>
//       </li>
//     );
//   }

// }

  


const Profile = () => {

  const history = useHistory();
  const alert = useAlert();
  const dispatch = useDispatch();



    const { user,
      //  loading,
        isAuthenticated } = useSelector((state) => state.user);

    useEffect(() => {
        if (isAuthenticated === false) {
          history.push("/register");
        }
      }, [history, isAuthenticated]);


  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 2,
      }}
    />
  );

  function logoutUser() {
    dispatch(logout());
    history.push("/");
    alert.success("Logout Successfully");
  }


  return (

    <div className="profileContainer">
      <div className="profile-design"></div>
      <h1>My Profile</h1>
      <div className="profile-main">
        <div className="profile-sideDesign"></div>

        <div className="userImgCont">
          <img
            src={user.avatar.url}
            alt="user-pic"
            style={{ Height: "100px", width: "100px" }}
          />
          <button className="btn btn-warning btn-lg" onClick={() =>history.push("/EditProfile")}>Edit Profile</button>
          <button className="btn btn-warning btn-lg" onClick={ () =>logoutUser()}>Logout</button>
          
          {user && user.role === "admin" ? <button className="btn btn-warning btn-lg" onClick={ () =>history.push("/admin/dashboard")}>Admin Dashboard</button>:("")}
          {/* // <button className="btn btn-warning btn-lg" onClick={ () =>history.push("/admin/dashboard")}>Admin Dashboard</button> */}

        
        </div>

        <div className="userInfoCont">
          <h2 style={{ textDecoration: "underline" }}>Basic Info</h2>

          <div id="profileLabelId" className="profile-label">
            <h4>Full Name</h4>
            <p>{user.name}</p>
            <ColoredLine color="black" />
          </div>

          <div className="profile-label">
            <h4>Email</h4>
            <p>{user.email}</p>
            <ColoredLine color="black" />
          </div>

          <div className="profile-label">
            <h4>Phone No</h4>
            <p>{user.phoneNo}</p>
            <ColoredLine color="black" />
          </div>

          <div className="profile-label">
            <h4>Joined On</h4>
            <p>{String(user.createdAt).substr(0, 10)}</p>
            <ColoredLine color="black" />
          </div>
        </div>

        <div className="profile-sideDesign"></div>
      </div>
    </div>
  );
};

export default Profile;


















// Fake

// import React
// // ,{useEffect}
//  from "react";
// import "./Profile.css";
// import { useHistory } from "react-router-dom";
// import Table from 'react-bootstrap/Table';
// import { AiFillDelete } from "react-icons/ai";

// const Profile = () => {

//   const data = [
//     {
//       sno: 1,
//       _id: 1,
//       title: "Saima paradise",
//     },
//     {
//       sno: 2,
//       _id: 2,
//       title: "Emaar Residency",
//     },
//     {
//       sno: 3,
//       _id: 3,
//       title: "Bahria Lake",
//     },
//     {
//       sno: 4,
//       _id: 4,
//       title: "Empire Center",
//     },
  
//   ]

//   const data2 = [
//     {
//       sno: 1,
//       _id: 1,
//       title: "Saima paradise",
//       installments: 3
//     },
//     {
//       sno: 2,
//       _id: 2,
//       title: "Emaar Residency",
//       installments: 4
//     },
//     {
//       sno: 3,
//       _id: 3,
//       title: "Bahria Avenue",
//       installments: 1
//     },
//     {
//       sno: 4,
//       _id: 4,
//       title: "Saima Lake",
//       installments: 2
//     },
  
//   ]
  
// const history = useHistory();

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
//     <main className="profileBody">
//     <div className="profileContainer">
//       <div className="profile-design"></div>
//       <h1 className="profile-heading" >My Profile</h1>
//       <div className="profile-main">
//       <div className="profile-sideDesign"></div>

//         <div className="userImgCont">
//           <img
//             src="/profile.png"
//             alt="userimage"
//             style={{ Height: "100px", width: "100px" }}
//           />
//           <button className="btn btn-warning btn-lg" onClick={() =>history.push("/EditProfile")}>Edit Profile</button>
//         </div>

//         <div className="userInfoCont">
//           <h2 style={{ textDecoration: "underline" }}>Basic Info</h2>

//           <div id="profileLabelId" className="profile-label">
//             <h4>Full Name</h4>
//             <p>user</p>
//             <ColoredLine color="black" />
//           </div>

//           <div className="profile-label">
//             <h4>Email</h4>
//             <p>user@gmail.com</p>
//             <ColoredLine color="black" />
//           </div>

//           <div className="profile-label">
//             <h4>Phone No</h4>
//             <p>328498234798</p>
//             <ColoredLine color="black" />
//           </div>

//           <div className="profile-label">
//             <h4>Joined On</h4>
//             <p>1-6-2022</p>
//             <ColoredLine color="black" />
//           </div>
//         </div>

      

       
//     <div className="profile-sideDesign"></div>
//     </div>
//       </div>
//       <div className="propertSell">
//           <h1 className="profile-heading">Property Ads by the User</h1>
//           <Table striped bordered hover className="profie-table">
//   <thead className="profile-table-head">
//     <tr>
//       <th>SNo</th>
//       <th>AD ID</th>
//       <th>Title</th>
//       <th>Delete</th>
//     </tr>
//   </thead>
//   <tbody>
//     {data.map((item)=>(
//       <>
//         <tr>
//         <td>{item.sno}</td>
//         <td>{item.sno}</td>
//         <td>{item.title}</td>
//         <td><AiFillDelete /></td>
//       </tr>
//       </>
//     )) }
    
 
//   </tbody>
// </Table>
//         </div>
    
    
//       <div className="projectsBook">
//           <h1 className="profile-heading">Projects booked by the User</h1>
//           <Table striped bordered hover className="profie-table">
//   <thead className="profile-table-head">
//     <tr>
//       <th>SNo</th>
//       <th>Project ID</th>
//       <th>Title</th>
//       <th>Total Installments</th>
//     </tr>
//   </thead>
//   <tbody>
//     {data2.map((item)=>(
//       <>
//         <tr>
//         <td>{item.sno}</td>
//         <td>{item._id}</td>
//         <td>{item.title}</td>
//         <td>{item.installments}</td>
//       </tr>
//       </>
//     )) }
    

//   </tbody>
// </Table>
//         </div>
//     </main>
//   );
// };

// export default Profile;