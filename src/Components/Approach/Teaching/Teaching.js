import React from 'react';
import AboutNav from '../../About/AboutNav/AboutNav';
import Communication from '../Communication/Communication';
import StandOut from '../StandOut/StandOut';

const Teaching = () => {
    return (
        <section className=" p-5 pb-md-5  my-5">
            <div className="container mt-5 border-bottom mx-auto">
            <h1 className="fw-bold mx-auto p-3">About Us</h1>
             <AboutNav></AboutNav>
                <div className="d-flex justify-content-center row">
                    <div className=" col-md-11 my-5">
                        <h4 className="text-dark fw-bold pb-3">Our teaching approach</h4>
                        <p className="text-secondary">We believe that anyone can learn a language with Duolingo. Our free, bite-size lessons feel more like a game than a textbook, and that's by design: Learning is easier when you're having fun.
                       </p>
                       <p>But Duolingo isn't just a game. It's based on a methodology proven to foster long-term retention, and a curriculum aligned to an international standard. Let's explore how language learning happens with Duolingo!</p>
                    </div>
                </div>
            </div>
            <Communication></Communication>
            <StandOut></StandOut>

        </section>
    );
};

export default Teaching;