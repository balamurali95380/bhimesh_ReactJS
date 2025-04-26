import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchByDirector, filterByGenre } from '../features/movies/moviesSlice';

const SearchBar = () => {
  const [director, setDirector] = useState('');
  const [genre, setGenre] = useState('');

  const dispatch = useDispatch();

  const handleSearchDirector = (e) => {
    setDirector(e.target.value);
    dispatch(searchByDirector(e.target.value));
  };

  const handleFilterByGenre = (e) => {
    setGenre(e.target.value);
    dispatch(filterByGenre(e.target.value));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by Director"
        value={director}
        onChange={handleSearchDirector}
      />
      <select value={genre} onChange={handleFilterByGenre}>
        <option value="">Select Genre</option>
        <option value="Action">Action</option>
        <option value="Drama">Drama</option>
        <option value="Comedy">Comedy</option>
        <option value="Horror">Horror</option>
      </select>
    </div>
  );
};

export default SearchBar;
