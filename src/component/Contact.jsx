import React, { Component } from 'react'
// import { Form,Button,Col} from 'react-bootstrap';

export class Contact extends Component {
    render() {
        return (
            <section id="contact" className="contact section-padding">
            <h2 className="section-title wow flipInX font-weight-bold" data-wow-delay="0.4s">Make a better decisions</h2>
            <div className="container">
            <form className="d-flex justify-content-center align-item-center">
            <div class="form-row">
    <div class="col mb-3 wow fadeInDown">
            <input type="text" class="form-control" id="validationDefault01" placeholder="Enter Your Email Address" value="example@example.com" required />
    </div>
     <div class="col mb-3 wow fadeInDown">
     <button type="button" class="form-control btn btn-success text-capitalize" required > Prepared for the future </button>
    </div>
  </div>
  
</form>
                </div>
                </section>
        )
    }
}

export default Contact
