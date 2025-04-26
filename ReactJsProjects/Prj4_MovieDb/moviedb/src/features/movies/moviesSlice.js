import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movies: [
      {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        releaseYear: 1994,
        genre: "Drama",
        rating: 9.3,
        actors: ["Tim Robbins", "Morgan Freeman"],
      },
      {
        title: "Inception",
        director: "Christopher Nolan",
        releaseYear: 2010,
        genre: "Sci-Fi",
        rating: 8.8,
        actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
      },
      {
        title: "The Godfather",
        director: "Francis Ford Coppola",
        releaseYear: 1972,
        genre: "Crime",
        rating: 9.2,
        actors: ["Marlon Brando", "Al Pacino"],
      },
      {
        title: "The Dark Knight",
        director: "Christopher Nolan",
        releaseYear: 2008,
        genre: "Action",
        rating: 9.0,
        actors: ["Christian Bale", "Heath Ledger"],
      },
      {
        title: "Forrest Gump",
        director: "Robert Zemeckis",
        releaseYear: 1994,
        genre: "Romance",
        rating: 8.8,
        actors: ["Tom Hanks", "Robin Wright"],
      },
    ],
    highestRatedMovies: [],
    moviesByGenre: {},
    recentlyAdded: [],
    watchList: [],
  };
  

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies.push(action.payload);
      if (action.payload.rating >= 4) state.highestRatedMovies.push(action.payload);
      if (action.payload.isRecent) state.recentlyAdded.push(action.payload);
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.title !== action.payload);
    },
    searchByDirector: (state, action) => {
      state.movies = state.movies.filter((movie) =>
        movie.director.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    filterByGenre: (state, action) => {
      state.moviesByGenre[action.payload] = state.movies.filter(
        (movie) => movie.genre === action.payload
      );
    },
    toggleWatchList: (state, action) => {
      const movieIndex = state.watchList.findIndex(
        (movie) => movie.title === action.payload.title
      );
      if (movieIndex === -1) {
        state.watchList.push(action.payload);
      } else {
        state.watchList.splice(movieIndex, 1);
      }
    },
  },
});

export const { addMovie, removeMovie, searchByDirector, filterByGenre, toggleWatchList } = moviesSlice.actions;
export default moviesSlice.reducer;
