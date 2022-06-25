import React from "react";
import "./Home.css";
import Search from "../../components/Search/Search";

const Home = () => {
  return (
    <div>
      <div className="landing">
         <div className="landing-search">
        <Search />
        </div> 
        
      </div>

      <section>
        <div className="container mission">
          <h1 className="sub-heading">Our Mission</h1>
          <div className="mission-desc">
            <img src="/z.jpeg" alt="" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
              accusantium voluptates eos quos ab nobis deserunt minus voluptatum
              magni quibusdam? Natus dicta aliquid, cumque neque quae distinctio
              accusantium iure perspiciatis quasi obcaecati magni sint
              reiciendis voluptates inventore ipsa! Modi obcaecati porro quia
              ullam odit hic voluptates laborum odio, rem saepe cumque
              perferendis et enim? Accusamus quisquam recusandae odit
              perferendis nostrum quasi eligendi veritatis nobis repudiandae
              quibusdam dicta molestiae, necessitatibus possimus!
            </p>
          </div>
        </div>
      </section>

      <section class="container ratings-section">
        <h1 class="text-center sub-heading my-lg-5">Our Popularity</h1>
        <p class="my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
          delectus minima. Quos labore nostrum rerum beatae, nam magnam
          temporibus perferendis id corporis! Quibusdam, eius odio. Maxime culpa
          pariatur inventore enim!
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
