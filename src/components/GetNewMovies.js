import React, { useEffect, useState, useContext }from 'react';
import { MovieContext } from '../contexts/MovieContext';
import DisplayMovies from './DisplayMovies';


const GetNewMovies = () => {
    const {apikey, shouldDisplay, setShouldDisplay, displayUpcoming, setDisplayUpcoming} = useContext(MovieContext);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    let url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=';

    useEffect(() => {
        fetch(url + apikey + '&language=en-US&page=1')
            .then(res => res.json())
                .then(data => setUpcomingMovies(data.results))
                    .then(setDisplayUpcoming(true))
                        .catch(err => console.log(err))
    }, [])
    return ( 
        <div>
            GetNewMovies
            {displayUpcoming === true && upcomingMovies.length > 0 ? <DisplayMovies results = {upcomingMovies}/> : null}
        </div>
     );
}
 
export default GetNewMovies;