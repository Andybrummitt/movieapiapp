import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import GetTopRated from './components/GetTopRated';
import Genres from './components/Genres';
import GetNewMovies from './components/GetNewMovies';
import Home from './components/Home';
import MovieContextProvider from './contexts/MovieContext';
import Header from './components/Header';
import Search from './components/Search';
import GenreContextProvider from './contexts/GenreContext';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MovieContextProvider>
          <GenreContextProvider>
            <Header />
              <Route exact path="/" component={Home} />
              <Route path="/search" component={Search} />
              <Route path="/genres" component={Genres} />
              <Route path="/get-top-rated" component={GetTopRated} />
              <Route path="/whats-upcoming" component={GetNewMovies} />
          </GenreContextProvider>
        </MovieContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
