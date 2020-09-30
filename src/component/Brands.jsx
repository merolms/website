import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export class Brands extends Component {
    render() {
        return (
    <section  class="section-padding">
      <div class="container ">
        <h1 className="text-center font-weight-bold">Trusted by World Renowned Brands-Big & <br/> Small !</h1>
        <ul class="social-icon wow fadeInUp text-center" data-wow-delay="0.8s">
                  <li>
                    <Link  href="#"><ion-icon name="cube-outline"></ion-icon></Link>
                  </li>
                  <li>
                    <Link href="#"><ion-icon name="hardware-chip-outline"></ion-icon></Link>
                  </li>
                  <li>
                    <Link  href="#"><ion-icon name="logo-web-component"></ion-icon></Link>
                  </li>
                  <li>
                    <Link  href="#"><ion-icon name="qr-code-outline"></ion-icon></Link>
                  </li>
                  <li>
                    <Link href="#"><ion-icon name="calendar-outline"></ion-icon></Link>
                  </li>
                </ul>
                </div>
    </section>
 
        );
    }
}

export default Brands
