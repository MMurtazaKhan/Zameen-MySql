import React, { Fragment } from "react";
import "./Booking.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FaceIcon from "@material-ui/icons/Face";

const Booking = () => {
  return (
    <div className="BookingCont">
        <Fragment>
      {/* {loading ? (
        <Loader />
      ) : ( */}
        <Fragment>
        
          <div className="BookingCont">
          
            <div className="bookingBox">
              <h1 className="bookingHeading">Book Your Project</h1>
              <h3 className="bookingSubHeading">Make a safe future!</h3>

              <form
                className="bookingForm"
                encType="multipart/form-data"
              >
                  <div className="bookingName">
                  <FaceIcon />
                  <input
                    type="text"
                    placeholder="Customer ID"
                    required
                    name="name"
                  />
                </div>

                <div className="bookingName">
                  <FaceIcon />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                  />
                </div>
                <div className="bookingEmail">
               
                  <label for="Project ID"> Project ID </label>
                    <select name="projectID" id="projectID" className="bookingDropdown" >
                        <option value="1">100</option>
                        <option value="2">200</option>
                        <option value="3">300</option>
                        <option value="4">400</option>
                    </select>
                </div>
                
                <div className="bookingEmail">
               
                  <label for="installments"> Installments </label>
                    <select name="installments" id="installments" className="bookingDropdown">
                        <option value="1">3 months</option>
                        <option value="2">6 months</option>
                        <option value="3">12 months</option>
                        <option value="4">18 months</option>
                    </select>
                </div>

                
                <input
                  type="submit"
                  value="Confirm Boooking"
                  className="bookingBtn"
                />
              </form>
            </div>
          </div>
        </Fragment>
      {/* )} */}
    </Fragment>
    </div>
  )
}

export default Booking