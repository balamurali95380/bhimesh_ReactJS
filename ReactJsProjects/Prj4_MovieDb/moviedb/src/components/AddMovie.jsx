import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../features/movies/moviesSlice';

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [actors, setActors] = useState('');
  const [isRecent, setIsRecent] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      title,
      director,
      releaseYear,
      genre,
      rating,
      actors: actors.split(','),
      isRecent,
    };

    dispatch(addMovie(newMovie));

    setTitle('');
    setDirector('');
    setReleaseYear('');
    setGenre('');
    setRating('');
    setActors('');
    setIsRecent(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Director" value={director} onChange={(e) => setDirector(e.target.value)} required />
      <input type="number" placeholder="Release Year" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} required />
      <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} required />
      <input type="number" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} required />
      <input type="text" placeholder="Actors" value={actors} onChange={(e) => setActors(e.target.value)} required />
      <label>
        Recent Movie:
        <input type="checkbox" checked={isRecent} onChange={(e) => setIsRecent(e.target.checked)} />
      </label>
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
