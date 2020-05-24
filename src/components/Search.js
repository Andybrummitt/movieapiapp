import React, {useContext} from 'react';
import { MovieContext } from '../contexts/MovieContext';
import HandleSearchRequest from './HandleSearchRequest';

const Search = () => {
    const {movie, displaySearch, recentSearches, setMovie, setDisplaySearch} = useContext(MovieContext)
    console.log(movie, displaySearch)

//map through recent searches in lis and buttons that onclick search the movie

    return ( 
        <div>
            {recentSearches.length < 1 ? <p>You have no recent searches</p> : (
                <div>
                    <p>Recent searches:</p>
                    <ul>
                        {recentSearches.map(movie => {
                            return <li key={Math.random()*1000}><button onClick={() => {
                                setDisplaySearch(true);
                                setMovie(movie);
                            }}>{movie}</button></li>
                        })}
                    </ul>
                </div>
            )}
                {movie !==  '' && displaySearch === true ? (
                    //do i want to handlesearchrequest if movie doesnt change?
                    <HandleSearchRequest />
                ) : (
                    <p>DisplaySearch is false {displaySearch}</p>
                    )}
        </div>
     );
}
 




export default Search;