import React, { useState } from 'react';
import './App.css';
import MovieSearch from './components/MovieSearch';
import MovieDetails from './components/MovieDetails';
import Watchlist from './components/Watchlist';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (movie) => {
    if (!watchlist.some((item) => item.imdbID === movie.imdbID)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  const removeFromWatchlist = (movie) => {
    setWatchlist(watchlist.filter((item) => item.imdbID !== movie.imdbID));
  };

  return (
    <div className="App">
      <h1>Movie Database App</h1>
      <MovieSearch onMovieSelect={setSelectedMovie} addToWatchlist={addToWatchlist} />
      {selectedMovie && <MovieDetails movie={selectedMovie} />}
      <Watchlist watchlist={watchlist} removeFromWatchlist={removeFromWatchlist} />
    </div>
  );
}

export default App;
