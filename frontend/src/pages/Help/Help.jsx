import React from 'react'
import "./Help.css";
import {useRef, useState} from 'react'



const Help = () => {
    const optionTab = useRef(null);
    const [show, setshow] = useState("yes");

    const switchTabs = (e, tab) =>{
        if (tab==="yes") {
            
            // optionTab.current.classList.add("collapse");
            optionTab.current.classList.remove("null-container");  
            setshow("yes");
        }
        else{
            optionTab.current.classList.add("null-container");
            // optionTab.current.classList.remove("collapse");  
            setshow("no");
        }
    }
  return (
    // var coll = document.getElementsByClassName("collapsible");
    // var i;
    
    // for (i = 0; i < coll.length; i++) {
    //   coll[i].addEventListener("click", function() {
    //     this.classList.toggle("active");
    //     var content = this.nextElementSibling;
    //     if (content.style.display === "block") {
    //       content.style.display = "none";
    //     } else {
    //       content.style.display = "block";
    //     }
    //   });
    // }
     
    <div className="main-container">
        
          <section>
            <div className="help-container">
              <h1 class="text-center text-align main-heading">Help Center</h1>
              <br />
              <h3 className="text-center padding-down sub-heading">
                Most Frequetly Asked Questions
              </h3>
            </div>
          </section>

          
            <div className="faq-container container">
              
                <aside className="container__sidebar">
                  <h4>Ask a Question</h4>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut laborum explicabo obcaecati, reiciendis totam aperiam illum impedit nisi repellat odio?</p>
                    <a href="Contact.html"><button  type="button" class="btn btn-lg btn-warning">Contact Us</button></a>
                </aside>
            
                <div className="container__main">
                
                  <h3 className="text-center my-3">Here are some Frequently Asked Questions!</h3>
                  <button type="button" class="collapsible" onClick={(e)=> switchTabs(e,show)}>1. How to advertise on Zameen.com?</button>
                  <div className="content null-conatiner" ref={optionTab}>
                    <p>Advertising on Zameen is easy, reasonably priced and it works wonders. Five basic listings are free for all users, while you can buy hot listings for a nominal fee. There are other advertising options available such as banner advertising, listing packages, splash ads and details about each option are available at advertising section of the site which can be reached by visiting the advertising page:
                   
                    <a href="Sell.html">Advertise on Zameen.com</a>
                    
                    If you wish to negotiate a special advertising deal with us then we will be happy to hear from you and help you formulate a customized solution suited to your needs</p>
                  </div>

                  <button type="button" className="collapsible">2. What payment options are available?</button>
                  <div className="content">
                    <p>You can make payments by depositing cash, cheque or wire/transfer the funds directly into our bank account. Wiring instructions and bank account details will be provided at the time of payment.</p>
                  </div>

                  <button type="button" className="collapsible">3. What is a client?</button>
                  <div className="content">
                    <p>Clients are your customers or people interested in your property and in general are of two types. The first type is one who has already dealt with you in the past i.e. an existing customer and the second type is a person who can be a potential customer and has contacted you via your listing at Zameen.</p>
                  </div>

                  <button type="button" className="collapsible">4. What are teams?</button>
                  <div className="content">
                    <p>Teams are a number of your agency staff working as a group to perform particular tasks assigned by you as the agency owner or team administrator. As an example if you have a total of 10 users listed as your agency staff, you can divide them in two different teams such as sales and rentals team consisting of 5 members each. You can allocate staff to these teams according to their qualifications, experience or credentials, where each of these teams will be responsible for their specific tasks related to listings, follow-ups and inquiries etc on Zameen.com. Remember that a particular staff can be a member of one team at a time and cannot exist simultaneously in multiple teams.</p>
                  </div>

                  <button type="button" className="collapsible">5. How to buy a property?</button>
                  <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, expedita magni eum reprehenderit ex quae in culpa itaque officia animi. Mollitia, ad hic. Suscipit iure corrupti voluptatibus ut aspernatur molestiae?</p>
                  </div>

                  <button type="button" class="collapsible">6. How to rent a property?</button>
                  <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipissicing elit. Dignissimos, expedita magni eum reprehenderit ex quae in culpa itaue officia animi. Mollitia, ad hic. Suscipit iure corrupti voluptatibus ut aspernatur molestiae?</p>
                  </div>

                  </div>
            

                </div>

        
    </div>
    
  )
}

export default Help;

