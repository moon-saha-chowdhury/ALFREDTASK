import React from 'react';
import communication from "../../../images/communication.PNG";

const Communication = () => {
    return (
        <section className=" p-2 pb-md-5  my-2">
        <div className="container mt-5 border-bottom mx-auto">
            <div className="d-flex justify-content-center row">
            <img className="img-fluid w-25" src={communication} alt="" />

                   <div className="col-md-7 my-5">
                   <h4 className="text-dark fw-bold">Real-life communication</h4>
                    <p className="text-secondary">Language is ultimately a communication tool. Duolingo takes a functional approach by focusing on what learners actually want to do with a language.</p>
                    <p className="text-secondary">Lessons focus on a real-life goal — for instance, ordering at a restaurant. Learners develop the vocabulary and grammar needed to achieve that goal through lots of varied practice in reading, writing, listening, and speaking.</p>
                   </div>
            </div>
        </div>

    </section>
    );
};

export default Communication;