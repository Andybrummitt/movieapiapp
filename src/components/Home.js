import React, {useContext} from 'react';
import { MovieContext } from '../contexts/MovieContext';


const Home = () => {
    const {movie} = useContext(MovieContext);
    return ( 
        <div>
            Home
            {movie}
        </div>
     );
}
 
export default Home;