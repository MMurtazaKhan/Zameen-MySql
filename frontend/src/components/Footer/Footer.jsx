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
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <li>
                    <p>affiliate program</p>
                  </li>
                </Link>
              </ul>
            </div>
            <div class="footer-col">
              <h4>get help</h4>
              <ul>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <li>
                    <p>FAQ</p>
                  </li>
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <li>
                    <p>shipping</p>
                  </li>
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <li>
                    <p>returns</p>
                  </li>
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <li>
                    <p>order status</p>
                  </li>
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <li>
                    <p>payment options</p>
                  </li>
                </Link>
              </ul>
            </div>
            <div class="footer-col">
              <h4>online shop</h4>
              <ul>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <li>
                    <p>watch</p>
                  </li>
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <li>
                    <p>bag</p>
                  </li>
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <li>
                    <p>shoes</p>
                  </li>
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <li>
                    <p>dress</p>
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
