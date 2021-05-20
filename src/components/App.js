
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/authFile/SignIn";
import SignUp from "./components/authFile/SignUp";
import {Dashboard} from "./components/Dashboard/Dashboard";
import adminUserAcess from "./components/Admin/adminUserAcess"
import DetailFormList from "./components/Admin/detailFormList";
import  SellerProductDetails from "./components/authFile/seller/SellerProductDetail";
function App() {
  return (
    <Router>
   <Switch>
  
   <Route exact path ="/Dashboard" component={Dashboard}/>
   <Route exact path ="/Seller" component={ SellerProductDetails}/>
   <Route exact path ="/Admin-Dashboard" component={DetailFormList}/>
      <div className="outer">
        <div className="inner">
        <Route exact path ="/admin" component={adminUserAcess}/>
            <Route exact path='/' component={Login} />
            <Route exact path="/sign-in" component={Login} />
            <Route exact path="/sign-up" component={SignUp} />
        </div>
      </div>
      </Switch>
    </Router>
  );
}

export default App;
