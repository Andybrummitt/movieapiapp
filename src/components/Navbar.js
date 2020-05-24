import React, {useContext, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import { MovieContext } from '../contexts/MovieContext';


const Navbar = (props) => {
    const {setMovie, displaySearch, setDisplaySearch, setRecentSearches, recentSearches} = useContext(MovieContext);
    console.log(displaySearch + ' from navbar')

    const movieInputRef = useRef(null);
   
    return ( 
        <nav className="navbar-main hide-nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/search">
                <input id="search-bar" ref={movieInputRef} type="search" placeholder="search" onChange={(e) => setMovie(e.target.value)}/><button onClick={() => {
                setDisplaySearch(true)
                setRecentSearches([...recentSearches, movieInputRef.current.value])
                }}>Search</button></Link></li>
                <li><Link to="/genres">Genres</Link></li>
                <li><Link to="/get-top-rated">Get Top Rated</Link></li>
                <li><Link to="/whats-upcoming">Whats Upcoming?</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;