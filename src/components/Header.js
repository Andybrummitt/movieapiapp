import React from 'react';
import HbMenu from './HbMenu';
import Navbar from './Navbar';

const Header = (props) => {
    return ( 
        <header>
            <div className="mobile-nav-container">
                <HbMenu />
                <h1 className="mobile-title">Movie App</h1>
            </div>
            <Navbar />
        </header>
     );
}
 
export default Header;