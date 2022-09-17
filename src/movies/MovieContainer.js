import { useState, useEffect } from 'react';
import { movies } from '../data/movies';
import Movie from './Movie';
import './movies.css';

const fetchMovies = () => {
  // We can call an api and return the values from there
  return movies;
};

const MovieContainer = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movies = fetchMovies();
    setMovies(movies);
  }, []);

  return (
    <div className='movie-container'>
      <h2>Movies</h2>
      <ul className='movie-list'>
        {movies.map((movie) => {
          return <Movie movie={movie} key={movie.id} />;
        })}
      </ul>
    </div>
  );
};

export default MovieContainer;
