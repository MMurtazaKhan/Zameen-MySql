
// , { useEffect, useState }

 import "./App.css";
 import { BrowserRouter, Route, Switch } from "react-router-dom";
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
import SellProperty from "./pages/BookingProperty/ProjectProperty";
import ProjectDetail from "./pages/BookingProperty/ProjectDetail";





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
          <Route exact path="/projects" component={SellProperty} />
          
          <Route exact path="/projectDetail/:id" component={ProjectDetail} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
 