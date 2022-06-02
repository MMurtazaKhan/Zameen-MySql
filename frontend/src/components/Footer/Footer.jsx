

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
                    <a>about us</a>
                  </li>
                </Link>
                <Link to="/services" style={{ textDecoration: "none" }}>
                  <li>
                    <a>our services</a>
                  </li>
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <li>
                    <a>privacy policy</a>
                  </li>
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <li>
                    <a>affiliate program</a>
                  </li>
                </Link>
              </ul>
            </div>
            <div class="footer-col">
              <h4>get help</h4>
              <ul>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <li>
                    <a>FAQ</a>
                  </li>
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <li>
                    <a>shipping</a>
                  </li>
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <li>
                    <a>returns</a>
                  </li>
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <li>
                    <a>order status</a>
                  </li>
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <li>
                    <a>payment options</a>
                  </li>
                </Link>
              </ul>
            </div>
            <div class="footer-col">
              <h4>online shop</h4>
              <ul>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <li>
                    <a>watch</a>
                  </li>
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <li>
                    <a>bag</a>
                  </li>
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <li>
                    <a>shoes</a>
                  </li>
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <li>
                    <a>dress</a>
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

            {/* <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <Link to="/contact">
                  <FaFacebookF style={{ color: "white", fontSize: "1.2em" }} />
                </Link>

                <Link to="/contact">
                  <FaTwitter style={{ color: "white", fontSize: "1.2em" }} />
                </Link>

                <Link to="/contact">
                  <AiOutlineInstagram
                    style={{ color: "white", fontSize: "1.2em" }}
                  />
                </Link>

                <Link to="/contact">
                  <FaLinkedinIn style={{ color: "white", fontSize: "1.2em" }} />
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
