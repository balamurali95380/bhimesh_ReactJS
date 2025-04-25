import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from '../feautures/recipes/recipesSlice';

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
});
