import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignUp from "./pages/SignUp/SignUp";
import RegisterProperty from "./pages/RegiterProperty/RegisterProperty";
import Sell from "./pages/Sell/Sell";
import SellDetail from "./pages/Sell/SellDetail";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import CreateProject from "./pages/Admin/CreateProject/CreateProject";
import ProjectProperty from "./pages/BookingProperty/ProjectProperty";
import ProjectDetail from "./pages/BookingProperty/ProjectDetail";
import Booking from "./pages/BookingProperty/Booking";
import Profile from "./pages/Profile/Profile";

import PropertyList from "./pages/Admin/PropertyList/PropertyList";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import BlogMain from "./pages/Blog/BlogMain";
import BlogViewDetails from "./pages/Blog/BlogViewDetail";
import RegisterationList from "./pages/Admin/RegisterationList/RegisterationList";
import UpdateRegisteration from "./pages/Admin/UpdateRegisteration/UpdateRegisteration";

function App() {
  return (
    <div>
      <ToastContainer position="top-center" />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={SignUp} />

          <Route exact path="/reg-property" component={RegisterProperty} />

          <Route exact path="/sell" component={Sell} />
          <Route exact path="/sellDetail/:PID" component={SellDetail} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/Blog" component={BlogMain} />
          <Route exact path="/Blog/Blogdata/:id" component={BlogViewDetails} />
          <Route exact path="/admin/dashboard" component={Dashboard} />
          <Route exact path="/admin/createProject" component={CreateProject} />
          <Route exact path="/admin/property" component={PropertyList} />
          <Route
            exact
            path="/admin/proj-registeration"
            component={RegisterationList}
          />

          <Route
            exact
            path="/admin/reg/update/:RID/:PRID/:CID"
            component={UpdateRegisteration}
          />

          <Route exact path="/projects" component={ProjectProperty} />
          <Route exact path="/projectDetail/:PRID" component={ProjectDetail} />
          <Route exact path="/book-property/:PRID" component={Booking} />

          <Route exact path="/profile" component={Profile} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
