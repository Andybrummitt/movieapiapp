import React, {useState, useContext, useEffect} from 'react';
import { MovieContext } from '../contexts/MovieContext';
import DisplayMovies from './DisplayMovies';

const HandleSearchRequest = () => {
    const {movie, apikey, displaySearch} = useContext(MovieContext);
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
                .then(res => res.json())
                    .then(data => {
                        let dataArr = [];
                        for(let i = 0; i < 5; i++){
                            dataArr.push(data.results[i])
                        }
                        if(mounted){
                            console.log('hello')
                            setResults(dataArr)
                            setLoading(false)
                        }})
                        //maybe need setresults and setloading in different .then methods
                            .catch(err => console.log(err))
                                
                    }, []);

    useEffect(() => {
        return function(){
            console.log('search component unmounting')
            mounted = false;
            // 
        }
    })
            
    
    return ( 
        <div>
        {console.log(loading, displaySearch)}
            {loading === false && displaySearch === true && results.length > 0 ? <DisplayMovies results={results} /> : null}
        </div>  
     );
}
 
export default HandleSearchRequest;