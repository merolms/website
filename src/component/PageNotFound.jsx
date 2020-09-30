import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import commingsoon from './img/comming soon.jpg';

export class PageNotFound extends Component {
    render() {
        return (
            <div className="container">
                <div className=" col text-center mt-5">
                <img src={commingsoon} className="img-fluid"  alt=" Comming Soon "style={{display:"block",marginLeft:"auto",marginRight:"auto",width:"50%"}}  />
                <Link to="/" className="btn btn-success mt-4 mb-4">Click for back</Link>
            </div>
            </div>
        );
    }
}
export default PageNotFound
