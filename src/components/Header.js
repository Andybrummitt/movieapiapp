import React from 'react';
import Navbar from './Navbar';
import HandleMobileNav from './HandleMobileNav';
import {Link} from 'react-router-dom';

const Header = (props) => {
    return ( 
        <header>
            <div className="mobile-nav-container">
            <HandleMobileNav />
            <div className="title-div">
            <Link to="/">
                <h1 className="app-title">Movie App</h1>
            </Link>
            </div>
            </div>
            <Navbar />
            
        </header>
     );
}
 
export default Header;