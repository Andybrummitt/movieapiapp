import React, {useContext, useRef} from 'react';
import {Link} from 'react-router-dom';
import { MovieContext } from '../contexts/MovieContext';


const Navbar = (props) => {
    const {setMovie, setDisplaySearch, setRecentSearches, recentSearches} = useContext(MovieContext);

    const movieInputRef = useRef(null);

    return ( 
        <nav className="navbar-main hide-nav">
            <ul>
                <li className="not-search"><Link to="/">Home</Link></li>
                <div className="search-bar-and-button"><li className="search-li"><Link to="/search">
                <input id="search-bar" ref={movieInputRef} type="search" placeholder="search"/><button id="search-button" onClick={() => {
                setMovie(movieInputRef.current.value)
                setDisplaySearch(true)
                setRecentSearches([...recentSearches, movieInputRef.current.value])
                }}>Search</button></Link></li></div>
                <li className="not-search"><Link to="/genres">Genres</Link></li>
                <li className="not-search"><Link to="/get-top-rated">Get Top Rated</Link></li>
                <li className="not-search"><Link to="/whats-upcoming">Whats Upcoming?</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;