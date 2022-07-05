import React from "react";
import "./Home.css";
import Search from "../../components/Search/Search";
import { Link } from 'react-router-dom';


const Home = () => {

  return (
    <div>
      <div className="landing">
         <div className="landing-search">
        <Search />
        </div> 
        
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

      <section class="container ratings-section">
        <h1 class="text-center sub-heading my-lg-5">Our Popularity</h1>
        <p class="my-5" className="paragraph">
          For your general feedback, Please rate us according to your honest feedback. We are pleased with your feedback. 
        </p>
        <div class="ratings-container">
          <div class="ratings">
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
