import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { MovieContext } from '../contexts/MovieContext';

const Navbar = (props) => {
    const {shouldDisplay, setShouldDisplay, movie, setMovie} = useContext(MovieContext);
    console.log('from nav')
    console.log(movie)
    console.log(shouldDisplay)
    return ( 
        <nav className="navbar-main hide-nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><form onSubmit={(e) => {    
                e.preventDefault();
                setShouldDisplay(true);
                }}><input id="search-bar" type="search" placeholder="search" onChange={(e) => setMovie(e.target.value)}/><button type="submit">Search</button></form></li>
                <li><Link to="/genres">Genres</Link></li>
                <li><Link to="/get-top-rated">Get Top Rated</Link></li>
                <li><Link to="/whats-upcoming">Whats Upcoming?</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;