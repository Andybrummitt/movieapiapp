import React, {useState, useContext, useEffect} from 'react';
import { MovieContext } from '../contexts/MovieContext';
import DisplayMovies from './DisplayMovies';

const HandleSearchRequest = () => {
    const {movie, apikey, displaySearch, setDisplaySearch} = useContext(MovieContext);
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState([]);


    let searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=';
    let searchUrlAndKey = searchUrl + apikey + '&language=en-US&query=' + movie + '&page=1&include_adult=false';

    let mounted;

    useEffect(() => {
        mounted = true; 
    }, []);

    useEffect(() => {
            fetch(searchUrlAndKey)
                .then(res => {
                    return res.json()
                })
                    .then(data => {
                        if(data.results.length === 0){
                            setDisplaySearch(false);
                        }
                        let dataArr = [];
                        for(let i = 0; i < data.results.length; i++){
                            dataArr.push(data.results[i])
                        }
                        if(mounted && data.results.length > 0){
                            setResults(dataArr)
                            setLoading(false)
                        }})
                            .catch(err => {
                                alert('Sorry, there seems to be a connection problem')
                                console.log(err)
                            })
                                
                    }, []);

    useEffect(() => {
        return function(){
            mounted = false;
        }
    })
            
    
    return ( 
        <div>
            {loading === false && displaySearch === true ? <DisplayMovies results={results} /> : null}
        </div>  
     );
}
 
export default HandleSearchRequest;