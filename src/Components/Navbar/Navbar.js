import React from 'react';
import './Navbar.css'
import logo from '../../Images/logo/logo.png'
import { Link } from 'react-router-dom';

import { useState } from 'react';

const Navbar = () => {

    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };



    return (
        // <div className="MenuBar-container">
        //     <div className="container">
        //         <div className="row">
        //             <div className="col-md-2">
        //                 <div className="logo-img">
        //                     <img className="w-75" src={logo} alt="website logo" />
        //                 </div>
        //             </div>
        //             <div className="col-md-10">
        //                 <div className="menu-container ">
        //                     <ul className="d-flex align-items-end justify-content-end">
        //                         <Link to="/home" className="items">
        //                             <li>Home</li>
        //                         </Link>
        //                         <Link to="/courses" className="items">
        //                             <li>Course</li>
        //                         </Link>
        //                         <Link to="/about" className="items">
        //                             <li>About us</li>
        //                         </Link>
        //                         <Link to="contact" className="items">
        //                             <li>Contact us</li>
        //                         </Link>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <h5>E-learning <img src={logo} alt="" /></h5>
                <div className="hiddenLinks">
                    <Link to="/home"> Home </Link>
                    <Link to="/courses"> Course </Link>
                    <Link to="/about"> About Us</Link>
                    <Link to="/contact"> Contact Us</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/home"> Home </Link>
                <Link to="/courses"> Course </Link>
                <Link to="/about"> About us</Link>
                <Link to="/contact"> Contact us</Link>
                <button onClick={toggleNavbar}>
                </button>
            </div>
        </div>
    );
};

export default Navbar;