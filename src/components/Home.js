import React from 'react';

const Home = () => {
    return ( 
        <div className="home-div">
            <p>Welcome to MovieApp</p>
            <p>This app uses the movie database(tmdb) api</p>
            <p>Visit the movie database website <a id="movie-db-link" href="https://www.themoviedb.org/?language=en-US">here</a></p>
        </div>
     );
}
 
export default Home;