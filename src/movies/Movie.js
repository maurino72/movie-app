import React from 'react';

const Movie = ({ movie }) => {
  const { title, poster, rating, year, director } = movie;
  return (
    <li className='movie'>
      <img src={movie.poster} alt={movie.title} />
      <p>
        {movie.title} by {movie.director} was released on {movie.year}
      </p>
      <p>Rating: {movie.rating}</p>
    </li>
  );
};

export default Movie;
