import React, { Fragment
  // , useState, useEffect 
} from "react";
import "./EditProfile.css"
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FaceIcon from "@material-ui/icons/Face";



const EditProfile = () => {
  return (

        // <div className="editProfileCont">
        //     <h1>Update Profile</h1>

        //     <div className="editLabel">
        //         <input type="text" name="name" placeholder="Name" id="" />
        //     </div>
            
        //     <div className="editLabel">
        //         <input type="text" name="name" placeholder="Name" id="" />
        //     </div>

        // </div>




        <Fragment>
      {/* {loading ? (
        <Loader />
      ) : ( */}
        <Fragment>
        
          <div className="updateProfileContainer">
          <div className="Editprofile-design">

            </div>
            <div className="updateProfileBox">
              <h1 className="updateProfileHeading">Update Profile</h1>

              <form
                className="updateProfileForm"
                encType="multipart/form-data"
              >
                <div className="updateProfileName">
                  <FaceIcon />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                  />
                </div>
                <div className="updateProfileEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"

                  />
                </div>

                <div id="updateProfileImage">
                  <img src="/User.png" alt="Avatar Preview" style={{height:"100px", width:"100px"}}/>
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                
                  />
                </div>
                <input
                  type="submit"
                  value="Update"
                  className="updateProfileBtn"
                />
              </form>
            </div>
          </div>
        </Fragment>
      {/* )} */}
    </Fragment>
)
}

export default EditProfile