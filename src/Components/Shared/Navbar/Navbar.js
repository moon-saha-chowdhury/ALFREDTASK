import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info fixed-top">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">
                <h3 className="mb-5 text-white ms-5 fs-2"><strong>duolingo</strong></h3>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link ms-5 text-white fs-6 fw-bold" to="/">SITE LANGUAGE: ENGLISH</Link>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link ms-5 fw-bold log-button">LOGIN</button>
                    </li>
                    <li className="nav-item">
                    <button className="nav-link ms-5 fw-bold text-white get-button">GET STARTED</button>

                    </li>
                   
                </ul>

            </div>
        </div>
    </nav>
    );
};

export default Navbar;