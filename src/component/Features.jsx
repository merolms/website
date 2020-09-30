import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export class Features extends Component {
    render() {
        return (
            <section id="features" className="features section-padding">
      <h2 className="section-title wow flipInX font-weight-bold  " data-wow-delay="0.4s">Basic Features </h2>
      <div className="container">
        <div className="row">       
          <div className="col-md-6 col-lg-3 col-xs-12">
            <div className="features-item  h-100 wow fadeInDown" data-wow-delay="0.3s">
              <img className="card-img-top "  src="https://images.squarespace-cdn.com/content/v1/5a4a86d5017db279bafd1a1c/1516051376476-C4KCE6A4J5QUDFS1SC9U/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/people-woman-with-bun-at-computer-graphic-design-color-swatches-drawing-tablet-bigstock.jpg?format=1500w" alt="Wed Designer"/>
             <div className="features-content">
                <h3 className="font-weight-bold"><Link to="">Easy-to-use interface</Link></h3>           
              </div>
            </div>
          </div>
        
          <div className="col-md-6 col-lg-3 col-xs-12">
            <div className="features-item h-100 wow fadeInDown" data-wow-delay="0.6s">
            <img className="card-img-top "  src="https://images.squarespace-cdn.com/content/v1/5a4a86d5017db279bafd1a1c/1516051376476-C4KCE6A4J5QUDFS1SC9U/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/people-woman-with-bun-at-computer-graphic-design-color-swatches-drawing-tablet-bigstock.jpg?format=1500w" alt="Wed Designer"/>
             <div className="features-content">
              <h3 className="font-weight-bold"><Link to="">Custom Branding</Link></h3>
                </div>
            </div>
          </div>          
          <div className="col-md-6 col-lg-3 col-xs-12">
            <div className="features-item h-100 wow fadeInDown" data-wow-delay="0.9s">
            <img className="card-img-top "  src="https://images.squarespace-cdn.com/content/v1/5a4a86d5017db279bafd1a1c/1516051376476-C4KCE6A4J5QUDFS1SC9U/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/people-woman-with-bun-at-computer-graphic-design-color-swatches-drawing-tablet-bigstock.jpg?format=1500w" alt="Wed Designer"/>
              <div className="features-content">
              <h3 className="font-weight-bold"><Link to="">Cloud-hosted Platform</Link></h3>
             </div>
            </div>
          </div>         
          <div className="col-md-6 col-lg-3 col-xs-12">
            <div className="features-item h-100 wow fadeInDown" data-wow-delay="1.2s">     
            <img className="card-img-top "  src="https://images.squarespace-cdn.com/content/v1/5a4a86d5017db279bafd1a1c/1516051376476-C4KCE6A4J5QUDFS1SC9U/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/people-woman-with-bun-at-computer-graphic-design-color-swatches-drawing-tablet-bigstock.jpg?format=1500w" alt="Wed Designer"/>         
              <div className="features-content">
              <h3 className="font-weight-bold"><Link to="">Content Security/DRM Protection</Link></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>   
        );
    }
}

export default Features
