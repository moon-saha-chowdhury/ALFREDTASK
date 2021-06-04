import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
       <footer className="clear-both mb-5">
           <div className="d-flex justify-content-center">
               <p className="me-3 footer-area fw-bold">ABOUT</p>
               <p className="me-3 fw-bold ">BLOG</p>
               <p className="me-3 fw-bold ">SCHOOLS</p>
               <p className="me-3 fw-bold ">APPS</p>
               <p className="me-3 fw-bold ">HELP</p>
               <p className="me-3 fw-bold">GUIDELINES</p>
               <p className="me-3 fw-bold">CAREERS</p>
               <p className="me-3 fw-bold ">TEAMS</p>
               <p className="me-3 fw-bold ">PRIVACY</p>
           </div>

       </footer>
    );
};

export default Footer;