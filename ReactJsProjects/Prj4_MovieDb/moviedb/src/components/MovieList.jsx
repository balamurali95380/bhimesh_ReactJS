import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies);

  return (
    <div className="movie-list">
      {movies.length === 0 ? (
        <p>No movies available</p>
      ) : (
        movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)
      )}
    </div>
  );
};

export default MovieList;
