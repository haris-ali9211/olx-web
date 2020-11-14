import React from "react";
import { BrowserRouter as Router,Switch,  Route,Link} from "react-router-dom";
import Home from '../components/Home1'
import Product from '../components/Product'
import Signup from '../components/Signup'


class AppRouter extends React.Component{
    render(){       
        return(
          <Router>
              <Route exact path="/" component={Home}/>
              <Route exact path="/product" component={Product}/>
              <Route exact path="/login" component={Signup}/>
          </Router>  
       )
    }
}
export default AppRouter;