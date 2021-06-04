import React from 'react';
import standOutPhoto from "../../../images/standOut.PNG";
const StandOut = () => {
    return (
        <section className=" p-2 pb-md-5  my-2">
        <div className="container mt-5 border-bottom mx-auto">
            <div className="d-flex justify-content-center row">
                   <div className="col-md-7 my-5">
                   <h4 className="text-dark fw-bold">Real-life communication</h4>
                    <p className="text-secondary">Along with commonly used phrases like "¿Dónde está el baño?" (Where is the bathroom?), Duolingo learners also encounter sentences like "Tu oso bebe cerveza" (Your bear drinks beer).</p>
                    <p className="text-secondary">Why the quirky sentences? They're memorable and more fun to learn. Our unexpected content also pushes learners to think carefully about the language they're learning.</p>
                   </div>
                   <img className="img-fluid w-25" src={standOutPhoto} alt="" />
            </div>
        </div>

    </section>
    );
};

export default StandOut;