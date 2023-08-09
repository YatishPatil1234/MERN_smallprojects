import React, { useState } from 'react';
import MovieDetails from './MovieDetails';

function MovieSearch({ onMovieSelect, addToWatchlist }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const apiKey = 'ca83879';

  const handleSearch = async () => {
    const apiUrl = `http://www.omdbapi.com/?s=${searchQuery}&apikey=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.Search) {
        setSearchResults(data.Search);
      }
    } catch (error) {
      console.error('Error fetching movies', error);
    }
  };


  return (
    <div>
      
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for movies..."
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>

      <div className="search-results">
        {searchResults.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <h3>{movie.Title}</h3>
            <div className="button-container">
              <button
                style={{
                  backgroundColor: 'black',
                  color: 'white',
                  margin: '0 5px',
                }}
                onClick={() => onMovieSelect(movie)}
              >
                View Details
              </button>
              <button
                style={{
                  backgroundColor: 'black',
                  color: 'white',
                  margin: '0 5px',
                }}
                onClick={() => addToWatchlist(movie)}
              >
                Add to Watchlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSearch;
