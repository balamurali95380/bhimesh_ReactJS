// import { useState } from 'react'
import React from 'react';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';
import SearchBar from './components/bar';
import './styles.css';

function App() {
  return (
    <div className="App">
      <h1>Movie Database</h1>
      <SearchBar />
      <AddMovie />
      <MovieList />
    </div>
  );
}

export default App;
