import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recipes: [
    // Example recipes
    {
      name: "Pasta Alfredo",
      ingredients: ["Pasta", "Alfredo sauce", "Cheese"],
      instructions: "Boil pasta. Mix with Alfredo sauce. Add cheese.",
      prepTime: "30 minutes",
      servings: "4",
      category: "Dinner",
      cuisine: "Italian"
    },
    {
      name: "Pancakes",
      ingredients: ["Flour", "Eggs", "Milk", "Sugar"],
      instructions: "Mix all ingredients. Cook on griddle.",
      prepTime: "15 minutes",
      servings: "3",
      category: "Breakfast",
      cuisine: "American"
    }
  ],
  favoriteRecipes: [],
  searchResults: [],
  ingredientCategories: ["Vegetables", "Fruits", "Dairy", "Meat"],
  cuisineTypes: ["Italian", "American", "Indian", "Japanese"]
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    addRecipe: (state, action) => {
      state.recipes.push(action.payload);
    },
    removeRecipe: (state, action) => {
      state.recipes = state.recipes.filter(recipe => recipe.name !== action.payload);
    },
    toggleFavorite: (state, action) => {
      const recipeName = action.payload;
      if (state.favoriteRecipes.includes(recipeName)) {
        state.favoriteRecipes = state.favoriteRecipes.filter(name => name !== recipeName);
      } else {
        state.favoriteRecipes.push(recipeName);
      }
    },
    editRecipe: (state, action) => {
      const updatedRecipe = action.payload;
      const index = state.recipes.findIndex(r => r.name === updatedRecipe.name);
      if (index !== -1) {
        state.recipes[index] = updatedRecipe;
        // Optional: update searchResults if necessary
        const searchIndex = state.searchResults.findIndex(r => r.name === updatedRecipe.name);
        if (searchIndex !== -1) {
          state.searchResults[searchIndex] = updatedRecipe;
        }
      }
    },
    searchRecipes: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.searchResults = state.recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(searchTerm) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm))
      );
    },
    filterByCategory: (state, action) => {
      const { category, cuisine } = action.payload;
      state.searchResults = state.recipes.filter(recipe => 
        (category ? recipe.category === category : true) &&
        (cuisine ? recipe.cuisine === cuisine : true)
      );
    }
  }
});

export const {
  addRecipe,
  removeRecipe,
  toggleFavorite,
  editRecipe,
  searchRecipes,
  filterByCategory
} = recipesSlice.actions;

export default recipesSlice.reducer;
