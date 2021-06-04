import React from 'react';
import { Link } from 'react-router-dom';

const AboutNav = () => {
    return (
 <nav class="nav about-title border-bottom mx-auto">
  <Link className="nav-link ms-5 item fw-bold" to="/">MISSION</Link>
  <Link className="nav-link ms-5 item fw-bold" to="/approach">APPROACH</Link>
  <Link className="nav-link ms-5 item fw-bold" to="/team">TEAM</Link>
  <a className="nav-link ms-5 item fw-bold" target="_blank" href="https://careers.duolingo.com/">CAREERS</a>
  <a className="nav-link ms-5 item fw-bold"target="_blank" href="https://research.duolingo.com/">RESEARCH</a>
  <Link className="nav-link ms-5 item fw-bold" to="/">PRESS</Link>
  <Link className="nav-link item ms-5 fw-bold" to="/contact" >CONTACT US</Link>
</nav>
    );
};

export default AboutNav;