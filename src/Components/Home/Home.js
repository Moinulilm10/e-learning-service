import React from 'react';
import Banner from '../Banner/Banner';
import HomePic from '../../Images/photo-1593444285563-4479fb28226e.jpeg'
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <div className="home-section">
                <div className="mid-section">
                    <h1>Always something new </h1>
                    <h1>to learn</h1>
                    <p>With courses added regularly to our catalog, you always get the latest skills. Sale from $13.99 ends today.</p>
                </div>
                <div className="mid-section-img">
                    <img src={HomePic} alt="" />
                </div>
            </div>

        </div>

    );
};

export default Home;