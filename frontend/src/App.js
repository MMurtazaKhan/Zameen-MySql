
import React
  ,{ useEffect }
  // , { useEffect, useState }
  from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/AboutUs/About";
import Blog from './pages/Blog/BlogMain';
import BlogViewDetails from "./pages/Blog/BlogViewDetails";

<<<<<<< HEAD

=======
import { useEffect, useState } from "react"
// ,{ useEffect }
// , { useEffect, useState }

 import "./App.css";
>>>>>>> 4f55ffce7feeb2870d272fe2e27b0af8b6c77d7c
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignUp from "./pages/User/SignUp/SignUp";
import Help from "./pages/Help/Help";
import Profile from "./pages/User/Profile/Profile";
import Contact from "./pages/Contact/Contact";
import RegisterProperty from "./pages/RegisterProperty/RegisterProperty";
import { loadUser } from "./actions/userAction";
import store from "./store";
import EditProfile from "./pages/User/EditProfile/EditProfile";
import Booking from "./pages/BookingProperty/Booking";
import Sell from "./pages/Sell/Sell";
<<<<<<< HEAD

import propertyDetails from "./pages/Sell/propertyDetails"
import ProjectDetail from "./pages/BookingProperty/ProjectDetail"

import ProjectProperty from './pages/BookingProperty/ProjectProperty';
=======
import ProjectProperty from "./pages/BookingProperty/ProjectProperty"
import ProjectDetail from "./pages/BookingProperty/ProjectDetail"
>>>>>>> 4f55ffce7feeb2870d272fe2e27b0af8b6c77d7c
// import ProjectDetail from './pages/BookingProperty/ProjectDetail';
import BlogMain from './pages/Blog/BlogMain';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import PropertyList from './pages/Admin/PropertyList/PropertyList';
import CreateProject from './pages/Admin/CreateProject/CreateProject';
import UserList from './pages/Admin/UserList/UserList';
import ProjectList from './pages/Admin/ProjectList/ProjectList';
import SellDetail from './pages/Sell/SellDetail';

<<<<<<< HEAD
=======





>>>>>>> 4f55ffce7feeb2870d272fe2e27b0af8b6c77d7c
function App() {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);


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
          <Route exact path="/Blogs/Blogdata/:id" component={BlogViewDetails} />


          <Route exact path="/property/:id" component={propertyDetails} />

          <Route exact path="/sellDetail/:id" component={SellDetail} />
          <Route exact path="/projects" component={ProjectProperty} />
          <Route exact path="/projectDetail/:id" component={ProjectDetail} />

=======
>>>>>>> 4f55ffce7feeb2870d272fe2e27b0af8b6c77d7c

          <Route exact path="/About" component={About} />
          <Route exact path="/Blog" component={BlogMain} />


          <Route exact path="/sellDetail/:id" component={SellDetail} />
          <Route exact path="/projectDetail/:id" component={ProjectDetail} />
          <Route exact path="/projects" component={ProjectProperty} />
          <Route exact path="/admin/dashboard" component={Dashboard} />
          <Route exact path="/admin/property" component={PropertyList} />
          <Route exact path="/admin/users" component={UserList} />
          <Route exact path="/admin/projects" component={ProjectList} />
          <Route exact path="/admin/createProject" component={CreateProject} />
          
<<<<<<< HEAD

=======
>>>>>>> 4f55ffce7feeb2870d272fe2e27b0af8b6c77d7c




        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
