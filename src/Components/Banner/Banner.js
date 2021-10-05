import React from 'react';
import { useHistory } from 'react-router';

import './Banner.css'

const Banner = () => {

    const history = useHistory()


    const aboutUsButton = () => {
        history.push('/about')
    }

    return (
        <div className="banner-container ">
            <div className="">
                <div className="row d-flex banner align-items-center justify-content-center">

                    <div className="col-md-6">
                        <h1 className="title">
                            Online Education<br /> Start Your course and Shine
                        </h1>
                        <p className="text-white text-center mt-3">
                            Accelerate your during covid lockdown.
                            <br />
                            Grab the opportunity to learn something new from our team.
                        </p>
                        <button onClick={aboutUsButton} className="mt-3 about-btn">About Us</button>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;