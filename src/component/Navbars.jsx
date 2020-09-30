import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import Logotop from './img/logo.png';

export class Navbars extends Component {
    render() {
        return (           
    <header id="header-wrap">     
      <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar indigo">
        <div className="container">
                    <div className="navbar-header">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              <span className="icon-menu"></span>
              <span className="icon-menu"></span>
              <span className="icon-menu"></span>
            </button>
            <Link to="/" className="navbar-brand"><img src= {Logotop} alt="Logo-Header"  /></Link>
          </div>
          <div className="collapse navbar-collapse" id="main-navbar">
            <ul className="onepage-nev navbar-nav mr-auto w-100 justify-content-end clearfix">
              <li className="nav-item active">
                <Link to="#header-wrap" className="nav-link" >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#features" className="nav-link">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link  to="#pricing" className="nav-link" >
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#contact" className="nav-link" >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link" >
                  Login
                </Link>
              </li>             
              <li className="nav-item">
                <Link to="#" className="nav-link btn btn-success d-block ml-2">
                 Register
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <ul className="mobile-menu">
          <li>
            <Link to="/" >Home</Link>
          </li>         
          <li>
            <Link to="#features">Features</Link>
          </li>
          <li>
            <Link to="#pricing">Pricing</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
          <li>
            <Link to="#">Login</Link>
          </li>
          <li className="mb-2">
          <Link className="btn btn-success d-block" to="/register" >
                 Register
                </Link>
          </li>
        </ul>
       
      </nav>
     
      <div id="hero-area" className="hero-area-bg" >        
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 text-center">
              <div className="contents">
                <h2 className="head-title wow fadeInUp" data-wow-delay="0.4s">Learn today for better tomorrow <br/> With your own educator, In a different way.</h2>
             <h2 className="head-title wow fadeInUp" data-wow-delay="0.4s" >Get Started</h2>
                <div class="header-button wow fadeInUp" data-wow-delay="1s">
                <form className="d-flex justify-content-center">
      <div className="row">
      <div className="col-md-6">
      <input type="text" className="form-control mt-2" placeholder="Your Email Address"></input>
      </div>
      <div className="col-md-6">
      <Link to="#services" className="btn btn-success mt-2">Prepared for the future</Link>
      </div>
      </div>
    </form>
                </div>
                <p className="script-font wow fadeInUp" style={{fontStyle:"italic"}}>Try it free for 14 days ! No credit card required </p>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </header>
        );
    }
}

export default Navbars
