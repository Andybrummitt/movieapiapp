import React from 'react';
import HbMenu from './HbMenu';
import Navbar from './Navbar';
import HandleMobileNav from './HandleMobileNav';

const Header = (props) => {
    return ( 
        <header>
            <div className="mobile-nav-container">
            <HandleMobileNav />
                <h1 className="mobile-title">Movie App</h1>
            </div>
            <Navbar />
        </header>
     );
}
 
export default Header;