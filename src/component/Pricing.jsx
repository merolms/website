import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class Pricing extends Component {
    render() {
        return (         
            <section id="pricing" className="pricing section-padding">
            <h2 className="section-title wow flipInX font-weight-bold" data-wow-delay="0.4s">Plan & Pricing</h2>
            <div className="container">
    <div className="row">
     
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0 wow fadeInDown">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
            <h6 className="card-price text-center">$0<span className="period">/month</span></h6>
            <hr />
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Single User</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>5GB Storage</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Unlimited Private Projects</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Dedicated Phone Support</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Free Subdomain</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status Reports</li>
            </ul>
            <Link to="/" className="btn btn-block btn-success text-uppercase">Button</Link>
          </div>
        </div>
      </div>
   
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0 wow fadeInDown">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
            <h6 className="card-price text-center">$9<span className="period">/month</span></h6>
            <hr />
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>5 Users</strong></li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>50GB Storage</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Free Subdomain</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status Reports</li>
            </ul>
            <Link to="#" className="btn btn-block btn-success  text-uppercase">Button</Link>
          </div>
        </div>
      </div>
     
      <div className="col-lg-4">
        <div className="card wow fadeInDown">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
            <h6 className="card-price text-center">$49<span className="period">/month</span></h6>
            <hr />
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited Users</strong></li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>150GB Storage</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited</strong> Free Subdomains</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Monthly Status Reports</li>
            </ul>
            <Link to="#" className="btn btn-block btn-success  text-uppercase">Button</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
          </section>
        );
    }
}

export default Pricing
