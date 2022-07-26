import React from "react";
import "./Home.css";
// import Search from "../../components/Search/Search";
import { useHistory , Link } from 'react-router-dom';
import { FaCcPaypal, FaAirbnb } from "react-icons/fa";
import { SiZillow, SiTrulia } from "react-icons/si";


const Home = () => {
    const history = useHistory();
  return (
    <div>
      <div className="landing">
      <h1
          className="home-heading"
          style={{ color: "white", fontSize: "55px", fontFamily: "'Gentium Book Plus', serif" }}
        >
          <span style={{color: "#28b82d"}}>Zameen</span>.com
        </h1>
        <h3
          className="project-heading"
          style={{ color: "white", fontSize: "30px", fontFamily: " 'Dancing Script', cursive" }}
        >
          Har Pata {" "}
          <span className="yellow-color">Hamein Pata </span>Hai!
        </h3>
        <button className="home-btn" onClick={() => history.push("/contact")}>Contact Us</button>
      </div>

      <section>
        <div className="container services">
          <h1 className="sub-heading">Our Services</h1>
          <p className="paragraph">Providing you the reliable services that include selling, buying, renting and booking houses without fear of any fraud</p>
          <div className="home-cards">
          <div className="card">
            <img className="card-img" src="s1.jpg" alt="" />
            <p className="card-para">
              To Sell your property, Click on the following button
            </p>
           <Link to="/reg-property"><button className="card-btn">Sell Now</button></Link> 
          </div>
          <div className="card">
            <img className="card-img" src="s1.jpg" alt="" />
            <p className="card-para">
              To Buy your property, Click on the following button
            </p>
            <Link to="/sell"><button className="card-btn">Buy Now</button></Link> 
          </div>
          <div className="card">
            <img className="card-img" src="s1.jpg" alt="" />
            <p className="card-para">To Book your property, Click on the following button</p>
            <Link to="/projects"><button className="card-btn">Book Now</button></Link> 
          </div>
          
           
          </div>
        </div>
      </section>


      <section>
        <div className="container mission">
          <h1 className="sub-heading">Our Mission</h1>
          <div className="mission-desc">
            <img src="/bg.jpg" alt="" />
            <p className="para-italic">
              "While we are considered a leader in off-plan properties, it is just one of our many areas of expertise in the industry. Developers of multi-unit properties trust our track record of quick, reliable bulk sales.

They know they can trust us to match their premium developments with their ideal customers.

Our success lies in our network of property experts and customers spanning the globe. Leading developers in the UAE entrust their multi-billion-dollar projects to us because they know that we believe in thinking big and can help them reach out to customers in China, Singapore, the UK, Saudi Arabia, Mozambique, Russia, Qatar and Nigeria."
            </p>
          </div>
        </div>
      </section>

      <section className="sponsor-section">
        <h1 className="sponsor-heading">We are proud of affiliation with</h1>

        <div className="sponsor-cards">
        <div className="card">
            <img className="card-img" src="zillow.png" alt="" />
            <h2 className="card-heading">Zillow.com</h2>
            <p className="card-para">
                 An American tech real-estate marketplace company that was founded in 2006
            </p>
           
          </div>
        <div className="card">
            <img className="card-img" src="realt.png" alt="" />
            <h2 className="card-heading">Reator.com</h2>
            <p className="card-para">
               Realtor.com is a real estate listings website operated by the News Corp subsidiary Move, Inc.
            </p>
           
          </div>
        <div className="card">
            <img className="card-img" src="appartments.png" alt="" />
            <h2 className="card-heading">Appartments.com</h2>
            <p className="card-para">
            Apartments.com has over 150,000 active listings of houses, townhomes, condos and duplexes. 
            </p>
           
          </div>
        </div>
      </section>

      <section className="feedback">
      <h1 className="sponsor-heading">We Value your Feedback</h1>
      <p className="paragrpah">Please provide us with your honest feedback</p>
     <div className="feedback-input"> <textarea rows={9} cols={56}></textarea></div>
     <button className="feedback-btn" onClick={() => history.push("/register")}>Submit Now</button>
      </section>

      <section className="container ratings-section">
        <h1 className="text-center sub-heading my-lg-5">Our Popularity</h1>
        <p style={{fontFamily: "'Merriweather', serif", fontSize: "22px"}} >
          For your general feedback, Please rate us according to your honest feedback. We are pleased with your feedback. 
        </p>
        <div className="ratings-container">
          <div className="ratings">
            <div class="container__value">200k+</div>

            <div class="container__label">Community</div>
          </div>

          <div class="ratings">
            <div class="container__value">1M +</div>

            <div class="container__label">Users</div>
          </div>

          <div class="ratings">
            <div class="container__value">5k+</div>

            <div class="container__label">Ratings</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
