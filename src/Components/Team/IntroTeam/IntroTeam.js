import React from 'react';
import teamPhoto from "../../../images/teamMap.PNG";
import AboutNav from '../../About/AboutNav/AboutNav';
import diversity from "../../../images/destiny.PNG";
import chart from "../../../images/Chart.PNG";
import playtime from "../../../images/playtime.PNG";

const IntroTeam = () => {
    return (
        <section className=" p-5 pb-md-5  my-5">
            <div className="container mt-5 mx-auto border-bottom">
            <h1 className="fw-bold mx-auto p-3">About Us</h1>
             <AboutNav></AboutNav>
                <div className="d-flex justify-content-center row">
                    <div className=" col-md-7 my-5">
                        <h4 className="text-dark fw-bold pb-3">We have 4 offices. We come from more than 30 countries and speak more than 30 languages.</h4>
                    </div>
                    <img className="img-fluid w-75 mx-auto" src={teamPhoto} alt="" />
                </div>
            </div>
            <h3 className="fw-bold text-center mt-5">Diversity matters here.</h3>
          <div className="d-flex justify-content-center border-bottom row">
          <img className="img-fluid w-75 mx-auto " src={diversity} alt="" />
          </div>
          <h3 className="fw-bold text-center mt-5">One for all</h3>
          <div className="d-flex justify-content-center border-bottom row">
          <img className="img-fluid w-50 mx-auto " src={chart} alt="" />
          </div>
          <h3 className="fw-bold text-center mt-5">We take playtime seriously.</h3>
          <p className="text-center text-secondary fs-5">31 social clubs, 40 board games, and dogs are always welcome!</p>
          <div className="d-flex justify-content-center border-bottom row">
          <img className="img-fluid w-50 mx-auto " src={playtime} alt="" />
          </div>
        </section>
    );
};

export default IntroTeam;