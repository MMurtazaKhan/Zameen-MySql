import React
// , { useEffect, useState }
 from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignUp from "./pages/SignUp/SignUp";
import Help from "./pages/Help/Help";
import Profile from "./pages/Profile/Profile";
import Contact from "./pages/Contact/Contact";


import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
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

        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
 