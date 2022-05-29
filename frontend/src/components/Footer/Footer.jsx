import React from 'react'
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div><footer class="footer">
    <div class="footer-container">
      <div class="row">
        <div class="footer-col">
          <h4>company</h4>
          <ul>
            <li><a href="src/pages/Contact/Contact.js">about us</a></li>
            <li><a href="#">our services</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><Link>Affiliated Program</Link></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>get help</h4>
          <ul>
            <li><a href="/help">FAQ</a></li>
            <li><a href="#">shipping</a></li>
            <li><a href="#">returns</a></li>
            <li><a href="#">order status</a></li>
            <li><a href="#">payment options</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>online shop</h4>
          <ul>
            <li><a href="#">watch</a></li>
            <li><a href="#">bag</a></li>
            <li><a href="#">shoes</a></li>
            <li><a href="#">dress</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>follow us</h4>
          {/* <div class="social-links">
            <EmojiEventsOutlined style={{fontSize :"30px"}}/>
            {/* <a href="#"><i class="fab fa-facebook-f"></i></a> */}
            {/* <FontAwesomeIcon icon="fa-brands fa-twitter" style={{color: "white", backgroundColor: "red"}}/>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>  */}
        </div>
      </div>
    </div>
  </footer>
</div>
  )
}

export default Footer