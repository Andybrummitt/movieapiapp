import React, {useState, createContext, useReducer} from 'react';
// import rootReducer from '../reducers/rootReducer';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
    const [movie, setMovie] = useState('');
    const [shouldDisplay, setShouldDisplay] = useState(false);
    const apikey = 'd9a59171ac85e8473d3808c854f7c0a6';
        return ( 
            <MovieContext.Provider value={{movie, setMovie, shouldDisplay, setShouldDisplay, apikey}}>
                {props.children}
            </MovieContext.Provider>
         );
    }

 
export default MovieContextProvider;