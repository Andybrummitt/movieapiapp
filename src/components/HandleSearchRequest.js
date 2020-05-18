import React, {useState, useContext, useEffect} from 'react';
import { MovieContext } from '../contexts/MovieContext';
import DisplayMovies from './DisplayMovies';

const HandleSearchRequest = () => {
    const {movie, shouldDisplay, apikey} = useContext(MovieContext);
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState([]);

    let searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=';
    let searchUrlAndKey = searchUrl + apikey + '&language=en-US&query=' + movie + '&page=1&include_adult=false';
    useEffect(() => {
            fetch(searchUrlAndKey)
                .then(res => res.json())
                    .then(data => {
                        let dataArr = [];
                        for(let i = 0; i < 5; i++){
                            dataArr.push(data.results[i])
                        }
                        setResults(dataArr)})
                            .then(setLoading(false))
                                .catch(err => console.log(err))
                }, []);

    return ( 
        <div>
            {loading === false && results.length > 0 ? <DisplayMovies results={results} /> : null}
        </div>  
     );
}
 
export default HandleSearchRequest;