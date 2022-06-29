<<<<<<< HEAD
import React
  // ,{ useEffect }
  // , { useEffect, useState }
  from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/AboutUs/About";
import Blog from './pages/Blog/BlogMain';
=======
import React from 'react';
// ,{ useEffect }
// , { useEffect, useState }

 import "./App.css";
 import { BrowserRouter, Route, Switch } from "react-router-dom";
>>>>>>> 483590e587cf95be1c0480117975e5e86c30faa9
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignUp from "./pages/User/SignUp/SignUp";
import Help from "./pages/Help/Help";
import Profile from "./pages/User/Profile/Profile";
import Contact from "./pages/Contact/Contact";
import RegisterProperty from "./pages/RegisterProperty/RegisterProperty";
// import { loadUser } from "./actions/userAction";
// import store from "./store";
import EditProfile from "./pages/User/EditProfile/EditProfile";
import Booking from "./pages/BookingProperty/Booking";
import Sell from "./pages/Sell/Sell";
<<<<<<< HEAD
import propertyDetails from "./pages/Sell/propertyDetails";
=======
import ProjectProperty from './pages/BookingProperty/ProjectProperty';
import ProjectDetail from './pages/BookingProperty/ProjectDetail';
import sellDetail from './pages/Sell/sellDetail';

>>>>>>> b49c442982fc9dc3d37545f71bb4cc7a6ec68846





function App() {

  // useEffect(() => {
  //   store.dispatch(loadUser());
  // }, []);


  return (
    <div>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={SignUp} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/help" component={Help} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/reg-property" component={RegisterProperty} />
          <Route exact path="/EditProfile" component={EditProfile} />
          <Route exact path="/book-property" component={Booking} />
          <Route exact path="/sell" component={Sell} />
<<<<<<< HEAD
          <Route exact path="/About" component={About} />
          <Route exact path="/Blog" component={Blog} />

=======
<<<<<<< HEAD
          <Route exact path="/property/:id" component={propertyDetails} />
=======
          <Route exact path="/sellDetail/:id" component={sellDetail} />
          <Route exact path="/projects" component={ProjectProperty} />
          <Route exact path="/projectDetail/:id" component={ProjectDetail} />
>>>>>>> b49c442982fc9dc3d37545f71bb4cc7a6ec68846
>>>>>>> 483590e587cf95be1c0480117975e5e86c30faa9

          
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
