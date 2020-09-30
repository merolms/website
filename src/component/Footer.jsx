import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogoBottom from './img/logo-footer.png';

export class Footer extends Component {
    render() {
        return (            
            <footer className="footer-area section-padding">
              <div className="container">                
                <div className="row">
                  <div className="col-md-12">
                    <div className="footer-text text-center wow fadeInDown" data-wow-delay="0.3s">
                   <Link to="/" ><img src={LogoBottom} alt="Footer_Image" className="img-fluid align-center" width="150px"/> </Link>
                      <p>Copyright © 2020 All Right Reserved</p>
                    </div>
                  </div>
                </div>
              </div>
            </footer>          
        )
    }
}

export default Footer
