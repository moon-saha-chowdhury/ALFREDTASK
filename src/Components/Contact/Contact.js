import React from 'react';
import AboutNav from '../About/AboutNav/AboutNav';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Contact = () => {
    return (
        <div>
            <Navbar></Navbar>
        <div className=" p-5 pb-md-5  my-5">
        <div className="container mt-5 mx-auto border-bottom">
            <h1 className="fw-bold mx-auto p-3">About Us</h1>
            <AboutNav></AboutNav>
                <div className="d-flex justify-content-center row">
                    <div className=" col-md-7 my-5">
                        <h4 className="text-dark text-center fw-bold pb-3">Contact Us</h4>
                        <p className="text-secondary text-center">Are you having any trouble? <span className="text-info">Find Help Here</span></p>
                        <p className="text-secondary text-center">Journalists and bloggers, please reach out to: <span className="text-info">press@duolingo.com</span></p>
                        <p className="text-secondary text-center">Looking to partner with us?<span className="text-info"> partnerships@duolingo.com</span></p>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </div>

    );
};

export default Contact;