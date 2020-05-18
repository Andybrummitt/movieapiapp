import React from 'react';
import HandleMobileNav from './HandleMobileNav';
import HandleSearchRequest from './HandleSearchRequest';
import { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';



const DisplayLogic = () => {
    const {movie, shouldDisplay} = useContext(MovieContext);
    return ( 
        <div>
            <HandleMobileNav />
            {movie !==  '' && shouldDisplay === true ? (
                <HandleSearchRequest />
            ) : (
                null
            )}
            
        </div>
     );
}
 
export default DisplayLogic;