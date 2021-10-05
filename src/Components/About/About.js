import React from 'react';
import './About.css'
import AboutUs from '../../Images/about-us.jpg'

const About = () => {
    return (
        <div className="about">
            <div
                className="aboutTop"
                style={{ backgroundImage: `url(${AboutUs})` }}
            ></div>
            <div className="aboutBottom">
                <h1> ABOUT US</h1>
                <p>
                    Is traditional education destined to be a thing of the past? The answer is probably not, but why should students pay to attend a school where they must take classes that are not relevant to their goals? A common topic that is brought up when this is mentioned is the “for profit college”. After all, many of these institutions do offer customization and a faster path to graduation than other colleges.
                    Unfortunately, when this is balanced out with issues such as exorbitant tuition rates, questionable accrediting, and lack of regulation, for profit schools become less and less appealing to students who want quality. This leaves eLearning as the most viable option for many students. So, which sites are the best, and what makes them work so well?
                </p>
            </div>
        </div>
    );
};

export default About;