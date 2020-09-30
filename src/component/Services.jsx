import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export class Services extends Component {
    render() {
        return (
            <section id="services" class="services section-padding">
      <h2 class="section-title wow flipInX font-weight-bold  " data-wow-delay="0.4s">Our Services </h2>
      <div class="container">
        <div class="row">       
          <div class="col-md-6 col-lg-3 col-xs-12">
            <div class="services-item wow fadeInDown" data-wow-delay="0.3s">
              <div class="icon">
              <i class="icon-grid"></i>
              </div>
              <div class="services-content">
                <h3 className="font-weight-bold"><Link to="">Front-end Development</Link></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi.</p>
              </div>
            </div>
          </div>
        
          <div class="col-md-6 col-lg-3 col-xs-12">
            <div class="services-item wow fadeInDown" data-wow-delay="0.6s">
              <div class="icon">
              <i class="icon-layers"></i>
              </div>
              <div class="services-content">
              <h3 className="font-weight-bold"><Link to="">Graphic Design</Link></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi.</p>
              </div>
            </div>
          </div>          
          <div class="col-md-6 col-lg-3 col-xs-12">
            <div class="services-item wow fadeInDown" data-wow-delay="0.9s">
              <div class="icon">
              <i class="icon-briefcase"></i>
              </div>
              <div class="services-content">
              <h3 className="font-weight-bold"><Link to="">Business Branding</Link></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi.</p>
              </div>
            </div>
          </div>         
          <div class="col-md-6 col-lg-3 col-xs-12">
            <div class="services-item wow fadeInDown" data-wow-delay="1.2s">
              <div class="icon">
              <i class="icon-bubbles"></i>
              </div>
              <div class="services-content">
              <h3 className="font-weight-bold"><Link to="">Consultancy</Link></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>   
        );
    }
}

export default Services
