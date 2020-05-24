import React, {useEffect, useContext, useState}  from 'react';
import GenresDisplay from './GenresDisplay';
import { MovieContext } from '../contexts/MovieContext';
import { GenreContext } from '../contexts/GenreContext';

const HandleGenresRequest = (props) => {
    const {apikey} = useContext(MovieContext);
    const {id, moviesListByGenre, setMoviesListByGenre, displayMovies, setDisplayMovies} = useContext(GenreContext);
    

    let fullUrl = 'http://api.themoviedb.org/3/genre/' + id + '/movies?api_key=' + apikey + '&page_size=1';


    useEffect(() => {
        fetch(fullUrl)
            .then(res => res.json())
                .then(data => {
                    let dataArr = [];
                    for(let i = 0; i < 10; i++){
                        dataArr.push(data.results[i])
                    }
                        setMoviesListByGenre(dataArr)
                        setDisplayMovies(true)
                    })
                        .catch(err => console.log(err))
    }, []);

    return ( 
        <div>
            {displayMovies === true ? <GenresDisplay results={moviesListByGenre} /> : <p>Displaymovies not true!</p>}  
        </div>
     );
}
 
export default HandleGenresRequest;