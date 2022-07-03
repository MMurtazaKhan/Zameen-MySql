
import React
  // ,{ useEffect }
  // , { useEffect, useState }
  from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/AboutUs/About";
import Blog from './pages/Blog/BlogMain';
import BlogViewDetails from "./pages/Blog/BlogViewDetails";



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
import propertyDetails from "./pages/Sell/propertyDetails"
import sellDetail from "./pages/Sell/sellDetail"
import ProjectProperty from "./pages/BookingProperty/ProjectProperty"
import ProjectDetail from "./pages/BookingProperty/ProjectDetail"






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

          <Route exact path="/About" component={About} />
          <Route exact path="/Blog" component={Blog} />
          <Route exact path="/Blogs/Blogdata/:id" component={BlogViewDetails} />


          <Route exact path="/property/:id" component={propertyDetails} />

          <Route exact path="/sellDetail/:id" component={sellDetail} />
          <Route exact path="/projects" component={ProjectProperty} />
          <Route exact path="/projectDetail/:id" component={ProjectDetail} />




        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
