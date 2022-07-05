import React from "react";
import "./Help.css";
import { Link } from 'react-router-dom'
import { Accordion } from "react-bootstrap";


const Help = () => {


  return (

    <div className="main-container">
      <section>
        <div className="help-container">
          <h1 class="text-center text-align help-heading">Help Center</h1>
          <br />
          <h3 className="text-center padding-down sub-heading">
            Most Frequetly Asked Questions
          </h3>
        </div>
      </section>

      <div className="faq-container container">
        <aside className="container__sidebar" >
          <h4>Ask a Question</h4>
          <p>
          Zameen.com is head-quartered in Lahore but we have offices in Karachi and Islamabad as well. You can reach us via phone, email or walk right into any of our offices and we would be more than glad to help you
          </p>
          <a href="Contact.html">
            <button type="button" class="btn btn-lg btn-warning">
              Contact Us
            </button>
          </a>
        </aside>

        <main className="container__main">
          <h3 className="text-center my-3">
            Here are some Frequently Asked Questions!
          </h3>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="help-collapse">
                1. How to advertise on Zameen.com?
              </Accordion.Header>
              <Accordion.Body>
                Advertising on Zameen is easy, reasonably priced and it works
                wonders. Five basic listings are free for all users, while you
                can buy hot listings for a nominal fee. There are other
                advertising options available such as banner advertising,
                listing packages, splash ads and details about each option are
                available at advertising section of the site which can be
                reached by visiting the advertising page:
                <br />
                <br />
                {/* <a href="Sell.html">Advertise on Zameen.com</a> */}
                <Link to="E:\Zameen\frontend\src\pages\Sell\Sell.jsx" >Advertise on Zameen.com</Link>
                <br />
                <br />
                If you wish to negotiate a special advertising deal with us then
                we will be happy to hear from you and help you formulate a
                customized solution suited to your needs
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header className="help-collapse">
                2. What payment options are available?
              </Accordion.Header>
              <Accordion.Body>
                You can make payments by depositing cash, cheque or
                wire/transfer the funds directly into our bank account. Wiring
                instructions and bank account details will be provided at the
                time of payment.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header className="help-collapse">3. What is a client?</Accordion.Header>
              <Accordion.Body>
                Clients are your customers or people interested in your property
                and in general are of two types. The first type is one who has
                already dealt with you in the past i.e. an existing customer and
                the second type is a person who can be a potential customer and
                has contacted you via your listing at Zameen.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header className="help-collapse">4. What are teams?</Accordion.Header>
              <Accordion.Body>
                Teams are a number of your agency staff working as a group to
                perform particular tasks assigned by you as the agency owner or
                team administrator. As an example if you have a total of 10
                users listed as your agency staff, you can divide them in two
                different teams such as sales and rentals team consisting of 5
                members each. You can allocate staff to these teams according to
                their qualifications, experience or credentials, where each of
                these teams will be responsible for their specific tasks related
                to listings, follow-ups and inquiries etc on Zameen.com.
                Remember that a particular staff can be a member of one team at
                a time and cannot exist simultaneously in multiple teams.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header className="help-collapse">5. How to buy a property?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, expedita magni eum reprehenderit ex quae in culpa
                itaque officia animi. Mollitia, ad hic. Suscipit iure corrupti
                voluptatibus ut aspernatur molestiae?
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header className="help-collapse">6. How to rent a property?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet consectetur adipissicing elit.
                Dignissimos, expedita magni eum reprehenderit ex quae in culpa
                itaque officia animi. Mollitia, ad hic. Suscipit iure corrupti
                voluptatibus ut aspernatur molestiae?
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </main>
      </div>
    </div>
  );
};

export default Help;
