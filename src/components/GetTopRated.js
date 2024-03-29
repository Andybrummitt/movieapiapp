import React, { useState, useEffect, useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import DisplayMovies from './DisplayMovies';

const GetTopRated = (props) => {
    const {apikey, displayTopRated, setDisplayTopRated} = useContext(MovieContext);
    const [topRated, setTopRated] = useState([]);


    let url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=';

    useEffect(() => {
        fetch(url + apikey + '&language=en-US&page=1')
            .then(res => res.json())
                .then(data => data.results.filter(result => result.original_language === 'en'))
                    .then(englishData => {
                        let enDataArr = [];
                        for(let i = 0; i < 10; i ++){
                            enDataArr.push(englishData[i])
                        }
                        setTopRated(enDataArr)
                        })
                        .then(() => setDisplayTopRated(true))
                            .catch(err => {
                                alert('Sorry, there seems to be a connection problem')
                                console.log(err)
                            })
                        },[]);

    return ( 
        <div>
            {displayTopRated === true ? <DisplayMovies results={topRated}/> : null}
        </div>
     );
}
 
export default GetTopRated;