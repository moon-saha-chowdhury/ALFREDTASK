import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import IntroTeam from '../IntroTeam/IntroTeam';

const Team = () => {
    return (
        <div>
           <Navbar></Navbar> 
           <IntroTeam></IntroTeam>
           <Footer></Footer>
        </div>
    );
};

export default Team;