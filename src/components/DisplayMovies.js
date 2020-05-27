import React, {useContext, useEffect} from 'react';
import { MovieContext } from '../contexts/MovieContext';
import { GenreContext } from '../contexts/GenreContext';
import {Link} from 'react-router-dom';


const DisplayMovies = (props) => {
    const {setDisplaySearch} = useContext(MovieContext);
    const {setDisplayGenres, setDisplayMovies, displayGenres, setId, id} = useContext(GenreContext);

    let baseUrl = "https://image.tmdb.org/t/p/w500/";
    
    useEffect(() => {
        return function(){
            setDisplayMovies(false);
            setDisplayGenres(false);
            setDisplaySearch(false); 
            setId(null);
        }
    })

    return ( 
        <div className="display-movies-container">
        {displayGenres && (<div className="genres-text-and-button"><p>You are currently viewing movies in <strong>{props.genreTitle}</strong>.</p><Link to="/genres"><button>Back to genres</button></Link></div>)}
            <ul>
            {props.results.map(result => {
                return (
                    <li className="display-movie" key={result.id}>
                        <div className="display-movies-main-info">
                            <h2>{result.title}</h2>
                            <p>Rating: {result.vote_average}</p>
                            <p>Release Date: {result.release_date}</p>
                        </div>
                        <img src={baseUrl.concat(result.poster_path)} alt="The movie poster"/>
                        <p className="display-movies-text">{result.overview}</p>
                        
                    </li>
                )}
            )}
            </ul>
        </div>
     );
}
 
export default DisplayMovies;