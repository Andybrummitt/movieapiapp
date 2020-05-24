import React, {useContext, useEffect, useState } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import { GenreContext } from '../contexts/GenreContext';


const DisplayMovies = (props) => {
    const {setDisplaySearch} = useContext(MovieContext);
    const {setDisplayGenres, setDisplayMovies} = useContext(GenreContext);

    let baseUrl = "https://image.tmdb.org/t/p/w500/";
    

    useEffect(() => {
        return function(){
            setDisplayMovies(false);
            setDisplayGenres(false);
            setDisplaySearch(false);
        }
    })

    return ( 
        <div>
            <h1>DisplayMovies</h1>
            <ul>
            {props.results.map(result => {
                return (
                    <li className="display-movie" key={result.id}>
                        <h4>{result.title}</h4>
                        <p>Rating: {result.vote_average}</p>
                        <p>Release Date: {result.release_date}</p>
                        <p>{result.overview}</p>
                        <img src={baseUrl.concat(result.poster_path)} alt="The movie poster"/>
                    </li>
                )}
            )}
            </ul>
        </div>
     );
}
 
export default DisplayMovies;