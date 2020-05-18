import React, { useEffect, useState, useContext }from 'react';
import { MovieContext } from '../contexts/MovieContext';
import DisplayMovies from './DisplayMovies';


const GetNewMovies = () => {
    const {apikey, shouldDisplay, setShouldDisplay} = useContext(MovieContext);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    let url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=';

    console.log(shouldDisplay)

    useEffect(() => {
        fetch(url + apikey + '&language=en-US&page=1')
            .then(res => res.json())
                .then(data => setUpcomingMovies(data.results))
                    .then(setShouldDisplay(true))
                        .catch(err => console.log(err))
    }, [])
    return ( 
        <div>
            GetNewMovies
            {shouldDisplay === true && upcomingMovies.length > 0 ? <DisplayMovies results = {upcomingMovies}/> : null}
        </div>
     );
}
 
export default GetNewMovies;