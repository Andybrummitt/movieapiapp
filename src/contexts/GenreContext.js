import React, {createContext,  useState} from 'react';

export const GenreContext = createContext();

const GenreContextProvider = (props) => {
    const [id, setId] = useState(null);
    const [displayGenres, setDisplayGenres] = useState(false);
    const [displayMovies, setDisplayMovies] = useState(false);
    const [moviesListByGenre, setMoviesListByGenre] = useState([]);
    return (
        <GenreContext.Provider value={{id, setId, displayGenres, setDisplayGenres, displayMovies, setDisplayMovies, moviesListByGenre, setMoviesListByGenre}}>
            {props.children}
        </GenreContext.Provider>
    )
}

export default GenreContextProvider;