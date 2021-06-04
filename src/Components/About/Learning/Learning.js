import React from 'react';
import learningPhoto from "../../../images/learning.PNG";

const Learning = () => {
    return (
        <section className=" p-2 pb-md-5  my-2">
            <div className="container mt-5 border-bottom mx-auto">
                <div className="d-flex justify-content-center row">
                       <div className="col-md-7 my-5">
                       <h4 className="text-dark fw-bold">Making learning fun.</h4>
                        <p className="text-secondary">It's hard to stay motivated when learning online, so we made Duolingo so fun that people would prefer picking up new skills over playing a game.
                        </p>
                       </div>
                       <img className="img-fluid w-25" src={learningPhoto} alt="" />

                </div>
            </div>

        </section>
    );
};

export default Learning;