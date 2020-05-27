import React, { useEffect, useContext } from 'react';
import DisplayMovies from './DisplayMovies';
import { GenreContext } from '../contexts/GenreContext';

const GenresDisplay = (props) => {
    const {displayMovies, setDisplayMovies, id} = useContext(GenreContext);

    let genres = [{id: 16, genre: 'Animation'}, {id: 35, genre: 'Comedy'}, {id: 99, genre: 'Documentary'}, {id: 18, genre: 'Drama'}, {id: 14, genre: 'Fantasy'}, {id: 27, genre: 'Horror'}, {id: 878, genre: 'Science Fiction'}, {id: 53, genre: 'Thriller'}, {id: 10752, genre: 'War'}, {id: 37, genre: 'Western'}]

    
    let genresListContainer = document.querySelector('.genres-list-container');
    let genre = genres.filter(result => result.id === id);
    let genreTitle = genre[0].genre;

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
            {displayMovies ? <DisplayMovies genreTitle={genreTitle} results={props.results} /> : null}
        </div>
     );
}
 
export default GenresDisplay;