import React from 'react';

function MovieDetails({ movie }) {
  return (
    <div className="movie-details">
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={`${movie.Title} Poster`} />
      <p>{movie.Plot}</p>
      
      {Object.entries(movie).map(([property, value]) => (
       
        (value && property !== "Title" && property !== "Poster" && property !== "Plot" && property !== "Ratings") && (
          <p key={property}>
            {property}: {value}
          </p>
        )
      ))}
      
      
      {movie.Ratings ? (
        <p>
          Ratings: {movie.Ratings.map((rating) => rating.Source + ': ' + rating.Value).join(', ')}
        </p>
      ) : (
        <p>Ratings: N/A</p>
      )}
    </div>
  );
}

export default MovieDetails;
