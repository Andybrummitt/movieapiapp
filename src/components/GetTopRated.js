import React, { useState, useEffect, useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import DisplayMovies from './DisplayMovies';

const GetTopRated = (props) => {
    const {apikey, setShouldDisplay, shouldDisplay} = useContext(MovieContext);
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
                        .then(() => setShouldDisplay(true))
                            .catch(err => console.log(err))
                            // return function () {
                            //     setShouldDisplay(false)
                            // }
    }, []);

    return ( 
        <div>
            {shouldDisplay === true && <DisplayMovies results={topRated} />}
        </div>
     );
}
 
export default GetTopRated;