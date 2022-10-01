import React from "react";

import { Link} from "react-router-dom";

import './nav.css'


const nav =() => {
    return(
        <div>
            <nav className="navBar">
        {/* <div className="imgLogo">
            <img  className="logo" src="../Photos/logo.png" alt="..."/>
        </div> */}
        <ul className="nav-list" id="nav-list">
           
            <li> <Link className="nav-link" to="/">Home</Link> </li>
            <li> <Link className="nav-link" to="about">About Us</Link> </li>
            <li> <Link className="nav-link" to="contact">Contact</Link> </li>
            {/* <li> <Link className="nav-link" to="">Settings</Link></li> */}
            {/* <li> <Link className="nav-link" to="">Favourites</Link></li> */}
            <li> <Link className="nav-link" to="explore">Explore</Link></li>
            <li> <Link className="nav-link" to="signin">Login</Link></li>
            <li> <Link className="nav-link" to="signup">Sign Up</Link></li>

        </ul>
        {/* <div className="menu" id="toggle-button">
            <div className="menu-line"> </div>
            <div className="menu-line"> </div>
            <div className="menu-line"> </div>

        </div> */}
         </nav>
        </div>







    );

}
export default nav