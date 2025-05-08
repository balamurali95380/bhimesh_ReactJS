import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  recipes: [],  // make sure this is correctly initialized
  popularIngredients: ['Tomato', 'Cheese', 'Chicken'],
  dietaryPreferences: ['Vegetarian', 'Vegan', 'Gluten-Free'],
};

const recipeSlice = createSlice({
  name: 'recipeGenerator',
  initialState,
  reducers: {
    addRecipe: (state, action) => {
      state.recipes.push({ id: uuidv4(), ...action.payload });
    },
    updateRecipe: (state, action) => {
      const { id, updatedRecipe } = action.payload;
      const index = state.recipes.findIndex((recipe) => recipe.id === id);
      if (index !== -1) {
        state.recipes[index] = { ...state.recipes[index], ...updatedRecipe };
      }
    },
    removeRecipe: (state, action) => {
      state.recipes = state.recipes.filter((recipe) => recipe.id !== action.payload);
    },
  },
});

export const { addRecipe, updateRecipe, removeRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
