import React, { useEffect, useContext } from 'react';
import DisplayMovies from './DisplayMovies';
import { GenreContext } from '../contexts/GenreContext';

const GenresDisplay = (props) => {
    const {displayMovies, setDisplayMovies, moviesListByGenre} = useContext(GenreContext);

    
    let genresListContainer = document.querySelector('.genres-list-container');
    useEffect(() => {
        genresListContainer.classList.add('hide')
        genresListContainer.classList.remove('display')
    },[])

    useEffect(() => {
        return function() {
            setDisplayMovies(false)
            genresListContainer.classList.remove('hide')
            genresListContainer.classList.add('display')
        }
    })


    return ( 
        <div>
            hello
            {displayMovies ? <DisplayMovies results={props.results} /> : null}
        </div>
     );
}
 
export default GenresDisplay;