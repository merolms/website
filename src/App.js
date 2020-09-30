import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter,Route,Link, Switch, Redirect} from 'react-router-dom';
import Navbars from './component/Navbars';
import "./App.css"
import Brands from './component/Brands';
import Features from './component/Features';
import PageNotFound from './component/PageNotFound';
import Footer from './component/Footer';
import Pricing from './component/Pricing';
import Contact from './component/Contact';


export class App extends Component {
  render() {
    return (
     <BrowserRouter>
          <Switch>
     <Route exact path="/" render={props => (
          <React.Fragment>
            <Navbars />
            <Brands />
            <Features /> 
            <Pricing />  
            <Contact />
            <Footer />           
          </React.Fragment>
        )} />
        <Route path="/404" component={PageNotFound}/>
        <Redirect to="/404"  />
        </Switch>
        <Link className="back-to-top">
        <i class="icon-arrow-up"></i>
        </Link>
     </BrowserRouter>
    )
  }
}

export default App
