import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import SignUp from "./pages/SignUp/SignUp";
import RegisterProperty from "./pages/RegiterProperty/RegisterProperty";
import Sell from "./pages/Sell/Sell";
import SellDetail from "./pages/Sell/SellDetail";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import CreateProject from "./pages/Admin/CreateProject/CreateProject";

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
          <Route exact path="/admin/dashboard" component={Dashboard} />
          <Route exact path="/admin/dashboard" component={Dashboard} />
          <Route exact path="/admin/createProject" component={CreateProject} />



          {/* <Route exact path="/addContact" component={AddEdit} />
          <Route exact path="/update/:id" component={AddEdit} />
          <Route exact path="/view/:id" component={View} /> */}
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
