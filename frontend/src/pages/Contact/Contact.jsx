
import React from "react";
import "./Contact.css";
// import { MailIcon } from "@material-ui/icons";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import imageOne from "../../Images/contact.jpeg";


const Contact = () => {
  return (
    <main className="contact-page">
      <div className="contact-container" id="contact-id">
        <h1>contact us</h1>
        <div className="phone">
          <div className="contact-svgs">
            <BsFillTelephoneFill style={{ height: "100%" }} />
          </div>

          <p>0308-0129892,0334-1387202,0340-2628648</p>
        </div>
        <div className="email">
          <HiMail style={{ color: "white", fontSize: "3em" }} />
          <p>estateZ@gmail.com</p>
        </div>
        <div className="map">
          <IoLocationSharp style={{ color: "white", fontSize: "3em" }} />

          <p>Ned University Of Engineering And Technology,Karachi,Pakistan.</p>
        </div>
        <div className="social-links">
          <p>Follow Us on Social Media</p>
          <a href="/">
            <FaFacebookF style={{ color: "white", fontSize: "3em" }} />
          </a>
          <a href="/">
            <FaTwitter style={{ color: "white", fontSize: "3em" }} />
          </a>
          <a href="/">
            <AiOutlineInstagram style={{ color: "white", fontSize: "3em" }} />
          </a>
          <a href="/">
            <FaLinkedinIn style={{ color: "white", fontSize: "3em" }} />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contact;

