
import React from 'react';
import "./Profile.css";

const Profile = () => {
    
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
        <div className="profile-design">

        </div>
        <h1>My Profile</h1>
        <div className="profile-main">
            <div className="profile-sideDesign">

            </div>
        
            <div className="userImgCont">
                <img src="/User.png" alt="Pak Flag" style={{Height:"100px", width:"100px" }}/>
                <button className='btn btn-warning btn-lg'>Edit Profile</button>
            </div>

            <div className="userInfoCont">
                <h2 style={{ textDecoration: "underline" }}>Basic Info</h2>
                
                <div id='profileLabelId' className="profile-label">
                    <h4>Full Name</h4>
                    <p>User</p>
                    <ColoredLine color="black" />
                </div>

                <div className="profile-label">
                    <h4>Email</h4>
                    <p>User@email.com</p>
                    <ColoredLine color="black" />
                </div>
                
                <div className="profile-label">
                    <h4>Phone No</h4>
                    <p>0323-868686</p>
                    <ColoredLine color="black" />
                </div>
                
                <div className="profile-label">
                    <h4>Password</h4>
                    <p>*********</p>
                    <ColoredLine color="black" />
                </div>
                
                

            </div>
            
            <div className="profile-sideDesign">
                
            </div>
            
            </div>
    </div>
  )
}

export default Profile