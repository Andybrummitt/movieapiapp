import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import GetTopRated from './components/GetTopRated';
import Genres from './components/Genres';
import GetNewMovies from './components/GetNewMovies';
import Home from './components/Home';
import DisplayLogic from './components/DisplayLogic';
import MovieContextProvider from './contexts/MovieContext';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MovieContextProvider>
          <Header />
          <DisplayLogic />
          <Route exact path="/" component={Home} />
          <Route path="/genres" component={Genres} />
          <Route path="/get-top-rated" component={GetTopRated} />
          <Route path="/whats-upcoming" component={GetNewMovies} />
        </MovieContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
