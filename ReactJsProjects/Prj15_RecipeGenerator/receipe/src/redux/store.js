import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from './recipeSlice';

export const store = configureStore({
  reducer: {
    recipeGenerator: recipeReducer,  // This should match the state used in the component
  },
});
