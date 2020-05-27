import React, {Fragment, useEffect, useContext, useRef} from 'react';
import HandleGenresRequest from './HandleGenresRequest';
import { GenreContext } from '../contexts/GenreContext';

const Genres = () => {
    const {id, setId, displayGenres, setDisplayGenres} = useContext(GenreContext);


    const genresListContainerRef = useRef(null);

    useEffect(() => {
        if(id !== null){
            setDisplayGenres(true)
        }
    },[id]);


    return ( 
        <Fragment>
            <div ref={genresListContainerRef} className="genres-list-container">
                <div className="genres-list">
                    <button onClick={() => setId(16)}>Animation</button>
                    <button onClick={() => setId(35)}>Comedy</button>
                    <button onClick={() => setId(99)}>Documentary</button>
                    <button onClick={() => setId(18)}>Drama</button>
                    <button onClick={() => setId(14)}>Fantasy</button>
                    <button onClick={() => setId(27)}>Horror</button>
                    <button onClick={() => setId(878)}>Science Fiction</button>
                    <button onClick={() => setId(53)}>Thriller</button>
                    <button onClick={() => setId(10752)}>War</button>
                    <button onClick={() => setId(37)}>Western</button>
                </div>
            </div>
            {id !== null && displayGenres === true ? <HandleGenresRequest /> : null}
        </Fragment>
     );
}

export default Genres;