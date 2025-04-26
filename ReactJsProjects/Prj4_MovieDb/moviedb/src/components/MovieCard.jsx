import React from 'react';
import { useDispatch } from 'react-redux';
import { removeMovie, toggleWatchList } from '../features/movies/moviesSlice';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeMovie(movie.title));
  };

  const handleToggleWatchList = () => {
    dispatch(toggleWatchList(movie));
  };

  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Release Year: {movie.releaseYear}</p>
      <p>Genre: {movie.genre}</p>
      <p>Rating: {movie.rating}</p>
      <p>Actors: {movie.actors.join(', ')}</p>
      <button onClick={handleToggleWatchList}>
        {movie.isInWatchList ? 'Remove from Watch List' : 'Add to Watch List'}
      </button>
      <button onClick={handleRemove}>Remove Movie</button>
    </div>
  );
};

export default MovieCard;
