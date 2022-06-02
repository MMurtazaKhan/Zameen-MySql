import React from 'react'
import "./Home.css";
import {useRef, useState} from 'react'



const Home = () => {
    const optionTab = useRef(null) 
    const [show, setshow] = useState("yes")
    
    const switchTabs = (e, tab) =>{
        if (tab==="yes") {
            
            optionTab.current.classList.add("collapse-label");
            optionTab.current.classList.remove("null-container");  
            setshow("yes");
        }
        else{
            optionTab.current.classList.add("null-container");
            optionTab.current.classList.remove("collapse-label");  
            setshow("no");
        }
    }
  return (
<div>
    <div className='landing-container'>
        <h1>Search Properties for Sale</h1>
        <div className="options-container">
            <div className="first-row">
        <div className="drop-down">
        <label for="City"> City </label>
        <select name="City" id="City">
            <option value="Karachi">Karachi</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Lahore">Lahore</option>
            <option value="Islamabad">Islamabad</option>
        </select>
        </div>
        <input type="text" placeholder='Location' className='collapse-label' onClick={(e)=> switchTabs(e,show)}/>
        <button>Find</button>
        </div>

        <div className="second-row null-container" ref={optionTab}>
            <div className="drop-down">
        <label for="Purpose"> Purpose </label>
        <select name="Purpose" id="Purpose">
            <option value="Buy property">Buy property</option>
            <option value="Sell property">Sell property</option>
            <option value="Rent property">Rent property</option>
        </select>
        </div>

        <div className="drop-down">
        <label for="Price"> Price </label>
        <div className="min-max">
        <select name="Min" className='price-box' id="Price-1" placeholder='Min'>
            <option value="">0</option>
            <option value="">500000</option>
            <option value="">1000000</option>
            <option value="">5000000</option>
            <option value="">10000000</option>
            <option value="">20000000</option>
            <option value="">50000000</option>
        </select>
        <p>to</p>
        <select name="Max" className='price-box' id="Price-2" placeholder='Max'>
            <option value="">Max</option>
            <option value="">0</option>
            <option value="">500000</option>
            <option value="">1000000</option>
            <option value="">5000000</option>
            <option value="">10000000</option>
            <option value="">20000000</option>
            <option value="">50000000</option>
        </select>
        </div>
        </div>

        <div className="drop-down">
        <label for="Area"> Area (Marla)</label>
        <div className="min-max">
        <select name="Min" className="area-box" id='Area-1'>
        
            <option value="">0</option>
            <option value="">2</option>
            
        </select>
        
        <p>to</p>
        <select name="Max" className="area-box" id="Area-2">
            <option value="">2</option>
            <option value="">0</option>
            <option value="">2</option>
            
        </select>
        </div>
        </div>

        

        
        </div>

       

        </div>
      
    </div>
      <section>
      <div className="container mission">
        <h1 className="sub-heading">Our Mission</h1>
        <div className="mission-desc">
          <img src="/z.jpeg" alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
            accusantium voluptates eos quos ab nobis deserunt minus
            voluptatum magni quibusdam? Natus dicta aliquid, cumque neque
            quae distinctio accusantium iure perspiciatis quasi obcaecati
            magni sint reiciendis voluptates inventore ipsa! Modi obcaecati
            porro quia ullam odit hic voluptates laborum odio, rem saepe
            cumque perferendis et enim? Accusamus quisquam recusandae odit
            perferendis nostrum quasi eligendi veritatis nobis repudiandae
            quibusdam dicta molestiae, necessitatibus possimus!
          </p>
        </div>
      </div>
    </section>

    <section class="container ratings-section">
          <h1 class="text-center sub-heading my-lg-5">Our Popularity</h1>
            <p class="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, delectus minima. Quos labore nostrum rerum beatae, nam magnam temporibus perferendis id corporis! Quibusdam, eius odio. Maxime culpa pariatur inventore enim!</p>
          <div class="ratings-container">
            <div class="ratings">

              <div class="container__value">
                  200k+
              </div>
   
              <div class="container__label">
                  Community
              </div>
          </div>

            <div class="ratings">

              <div class="container__value">
                  1M +
              </div>
          
              <div class="container__label">
                  Users
              </div>
          </div>

            <div class="ratings">
           
              <div class="container__value">
                  5k+
              </div>
           
              <div class="container__label">
                  Ratings
              </div>
          </div>
        </div>
         
        </section>

                
    </div>
  )
}

export default Home;