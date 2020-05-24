import React, {useState, createContext, useReducer} from 'react';
// import rootReducer from '../reducers/rootReducer';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
    const [movie, setMovie] = useState('');
    const [shouldDisplay, setShouldDisplay] = useState(false);
    const [displayTopRated, setDisplayTopRated] = useState(false);
    const [displaySearch, setDisplaySearch] = useState(false);
    const [displayUpcoming, setDisplayUpcoming] = useState(false);
    const [recentSearches, setRecentSearches] = useState([]);
    const apikey = 'd9a59171ac85e8473d3808c854f7c0a6';
        return ( 
            <MovieContext.Provider value={{movie, setMovie, shouldDisplay, setShouldDisplay, apikey, displayTopRated, setDisplayTopRated, displaySearch, setDisplaySearch, displayUpcoming, setDisplayUpcoming, recentSearches, setRecentSearches}}>
                {props.children}
            </MovieContext.Provider>
         );
    }

 
export default MovieContextProvider;