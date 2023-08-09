import React from 'react';

function Watchlist({ watchlist, removeFromWatchlist }) {
  return (
    <div className="watchlist">
      <h3>Watchlist</h3>
      <ul>
        {watchlist.map((movie) => (
          <li key={movie.imdbID}>
            {movie.Title} - <button onClick={() => removeFromWatchlist(movie)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Watchlist;
