import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="footer-container">
          <div class="row">
            <div class="footer-col">
              <h4>company</h4>
              <ul>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <li>
                    <p>about us</p>
                  </li>
                </Link>
                <Link to="/services" style={{ textDecoration: "none" }}>
                  <li>
                    <p>our services</p>
                  </li>
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <li>
                    <p>privacy policy</p>
                  </li>
                </Link>
                
              </ul>
            </div>
            <div class="footer-col">
              <h4>get help</h4>
              <ul>
                <Link to="/help" style={{ textDecoration: "none" }}>
                  <li>
                    <p>FAQ</p>
                  </li>
                </Link>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <li>
                    <p>contact</p>
                  </li>
                </Link>
                <Link to="/blog" style={{ textDecoration: "none" }}>
                  <li>
                    <p>blog</p>
                  </li>
                </Link>
               
              </ul>
            </div>
            <div class="footer-col">
              <h4>options</h4>
              <ul>
                <Link to="/sell" style={{ textDecoration: "none" }}>
                  <li>
                    <p>buy</p>
                  </li>
                </Link>
                <Link to="/projects" style={{ textDecoration: "none" }}>
                  <li>
                    <p>projects</p>
                  </li>
                </Link>
                <Link to="/reg-property" style={{ textDecoration: "none" }}>
                  <li>
                    <p>post an ad</p>
                  </li>
                </Link>
                <Link to="/book-property" style={{ textDecoration: "none" }}>
                  <li>
                    <p>book project</p>
                  </li>
                </Link>
              </ul>
            </div>

            {/* Social Links */}
            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <div className="footer-svgs">
                  <Link to="/contact">
                    <FaFacebookF
                      style={{ color: "white", fontSize: "1.2em" }}
                    />
                  </Link>
                </div>

                <div className="footer-svgs">
                  <Link to="/contact">
                    <FaTwitter style={{ color: "white", fontSize: "1.2em" }} />
                  </Link>
                </div>

                <div className="footer-svgs">
                  <Link to="/contact">
                    <AiOutlineInstagram
                      style={{ color: "white", fontSize: "1.2em" }}
                    />
                  </Link>
                </div>

                <div className="footer-svgs">
                  <Link to="/contact">
                    <FaLinkedinIn
                      style={{ color: "white", fontSize: "1.2em" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;