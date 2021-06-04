import React from 'react';
import missionPhoto from '../../../images/about1.PNG';
import AboutNav from '../AboutNav/AboutNav';
import Learning from '../Learning/Learning';
import Universal from '../Universal/Universal';

const Mission = () => {
    return (
        <section className=" p-5 pb-md-5  my-5">
            <div className="container mt-5 border-bottom mx-auto">
            <h1 className="fw-bold mx-auto p-3">About Us</h1>
            <AboutNav></AboutNav>

                <div className="d-flex justify-content-center row">

                    <img className="img-fluid w-25" src={missionPhoto} alt="" />

                       <div className="col-md-7 my-5">
                       <h4 className="text-dark fw-bold">Personalized education.</h4>
                        <p className="text-secondary">Everyone learns in different ways. For the first time in history, we can analyze how millions of people learn at once to create the most effective educational system possible and tailor it to each student.
                       Our ultimate goal is to give everyone access to a private tutor experience through technology. </p>
                       </div>

                </div>
            </div>
            <Learning></Learning>
            <Universal></Universal>

        </section>
    );
};

export default Mission;