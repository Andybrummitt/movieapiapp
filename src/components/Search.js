import React, {useContext, useEffect, Fragment} from 'react';
import { MovieContext } from '../contexts/MovieContext';
import HandleSearchRequest from './HandleSearchRequest';

const Search = () => {
    const {movie, displaySearch, recentSearches, setMovie, setDisplaySearch, setDisplayRecentSearches, displayRecentSearches} = useContext(MovieContext)

    useEffect(() => {
        let searchBar = document.querySelector('#search-bar');
        let searchButton = document.querySelector('#search-button');
        searchBar.focus();
        searchBar.addEventListener('keyup', (e) => {
            if(e.keyCode === 13){
                searchButton.focus();
            }
        })
    }, [])

    let searchHandled;

    return ( 
        <Fragment>
             {displayRecentSearches ?
                <div>
                    <p id="recent-searches-text">You have {recentSearches.length} recent searches</p>
                    <ul>
                        {recentSearches.map(movie => {
                            return <li key={Math.random()*1000}><button id="recent-searches-li" onClick={() => {
                                setMovie(movie);
                                setDisplaySearch(true)
                                setDisplayRecentSearches(false)
                            }}>{movie}</button></li>
                        })}
                    </ul>
                </div> : <button id="recent-searches-toggle" onClick={() => setDisplayRecentSearches(true)}>Display Recent Searches</button>
            }
                {(() => {
                    if(movie !==  '' && displaySearch === true){
                        searchHandled = <HandleSearchRequest />
                    }
                    else if(movie === '' && displaySearch === false){
                        searchHandled = null;
                    }
                    else if(movie !== '' && displaySearch === false){
                        searchHandled = <p className="no-movies-message">No movies found...</p>
                    }
                })()}
                {searchHandled}
    </Fragment>
     );
}
 




export default Search;