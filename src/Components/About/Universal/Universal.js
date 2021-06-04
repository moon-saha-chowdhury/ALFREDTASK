import React from 'react';
import universalPhoto from "../../../images/universal.PNG";

const Universal = () => {
    return (
        <section className=" p-2 pb-md-5  my-2">
            <div className="container mt-5 border-bottom mx-auto">
                <div className="d-flex justify-content-center row">
                       <div className="col-md-10 my-2">
                       <h4 className="text-dark fw-bold">Universally accessible.</h4>
                        <p className="text-secondary">There are over 1.2 billion people learning a language and the majority are doing so to gain access to better opportunities. Unfortunately, learning a language is expensive and inaccessible to most.</p>
                        <p className="text-secondary">We created Duolingo so that everyone could have a chance. Free language education – no hidden fees, no premium content, just free.</p>
                        <p className="text-secondary">Duolingo is used by the richest man in the world and many Hollywood stars, and at the same time by public schools students in developing countries. We believe true equality is when spending more can't buy you a better education.</p>
                       </div>
                       <img className="img-fluid w-80 p-5" src={universalPhoto} alt="" />

                </div>
            </div>

        </section>
    );
};

export default Universal;