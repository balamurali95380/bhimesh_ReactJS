import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addRecipe,
  removeRecipe,
  toggleFavorite,
  editRecipe,
  searchRecipes,
  filterByCategory
} from './recipesSlice';
import RecipeCard from '../../components/RecipeCard';

const RecipesComponent = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipes.recipes || []);
  const searchResults = useSelector(state => state.recipes.searchResults || []);
  const favoriteRecipes = useSelector(state => state.recipes.favoriteRecipes || []);

  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ category: '', cuisine: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 3;

  const [formState, setFormState] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    prepTime: '',
    servings: '',
    category: '',
    cuisine: '',
    isEditing: false
  });

  // Determine what to display
  const hasResults = searchResults.length > 0;
  const currentList = hasResults ? searchResults : recipes;

  const indexOfLast = currentPage * recipesPerPage;
  const indexOfFirst = indexOfLast - recipesPerPage;
  const paginatedRecipes = currentList.slice(indexOfFirst, indexOfLast);

  const handleSearch = () => {
    dispatch(searchRecipes(searchTerm));
    setCurrentPage(1);
  };

  const handleFilter = () => {
    dispatch(filterByCategory(filters));
    setCurrentPage(1);
  };

  const handleClear = () => {
    setSearchTerm('');
    setFilters({ category: '', cuisine: '' });
    dispatch(searchRecipes(''));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipe = {
      name: formState.name,
      ingredients: formState.ingredients.split(',').map(i => i.trim()),
      instructions: formState.instructions,
      prepTime: formState.prepTime,
      servings: formState.servings,
      category: formState.category,
      cuisine: formState.cuisine
    };

    if (formState.isEditing) {
      dispatch(editRecipe(recipe));
    } else {
      dispatch(addRecipe(recipe));
    }

    setFormState({
      name: '',
      ingredients: '',
      instructions: '',
      prepTime: '',
      servings: '',
      category: '',
      cuisine: '',
      isEditing: false
    });
  };

  const handleEdit = (recipe) => {
    setFormState({
      name: recipe.name,  // Make the name editable
      ingredients: recipe.ingredients.join(', '),
      instructions: recipe.instructions,
      prepTime: recipe.prepTime,
      servings: recipe.servings,
      category: recipe.category,
      cuisine: recipe.cuisine,
      isEditing: true
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>🍳 Recipe Book</h2>

      <form onSubmit={handleSubmit}>
        <input
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          placeholder="Recipe Name"
          required
        />
        <input
          value={formState.ingredients}
          onChange={(e) => setFormState({ ...formState, ingredients: e.target.value })}
          placeholder="Ingredients (comma separated)"
          required
        />
        <textarea
          value={formState.instructions}
          onChange={(e) => setFormState({ ...formState, instructions: e.target.value })}
          placeholder="Instructions"
          required
        />
        <input
          value={formState.prepTime}
          onChange={(e) => setFormState({ ...formState, prepTime: e.target.value })}
          placeholder="Prep Time"
        />
        <input
          value={formState.servings}
          onChange={(e) => setFormState({ ...formState, servings: e.target.value })}
          placeholder="Servings"
        />
        <input
          value={formState.category}
          onChange={(e) => setFormState({ ...formState, category: e.target.value })}
          placeholder="Category"
        />
        <input
          value={formState.cuisine}
          onChange={(e) => setFormState({ ...formState, cuisine: e.target.value })}
          placeholder="Cuisine"
        />

        <button type="submit">{formState.isEditing ? "Update" : "Add"} Recipe</button>
      </form>

      <div style={{ marginTop: '20px' }}>
        <input
          placeholder="Search by ingredient or name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>

        <select value={filters.category} onChange={(e) => setFilters({ ...filters, category: e.target.value })}>
          <option value="">All Categories</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>

        <select value={filters.cuisine} onChange={(e) => setFilters({ ...filters, cuisine: e.target.value })}>
          <option value="">All Cuisines</option>
          <option value="Italian">Italian</option>
          <option value="Indian">Indian</option>
          <option value="American">American</option>
          <option value="Japanese">Japanese</option>
        </select>

        <button onClick={handleFilter}>Filter</button>
        <button onClick={handleClear}>Clear Filters</button>
      </div>

      <div style={{ marginTop: '30px' }}>
        {paginatedRecipes.length === 0 ? (
          <p>No recipes found.</p>
        ) : (
          paginatedRecipes.map(recipe => (
            <RecipeCard
              key={recipe.name}
              recipe={recipe}
              isFavorite={favoriteRecipes.includes(recipe.name)}
              onEdit={handleEdit}
              onDelete={(name) => dispatch(removeRecipe(name))}
              onToggleFavorite={(name) => dispatch(toggleFavorite(name))}
            />
          ))
        )}
      </div>

      {/* Pagination */}
      {currentList.length > recipesPerPage && (
        <div style={{ marginTop: '20px' }}>
          {Array.from({ length: Math.ceil(currentList.length / recipesPerPage) }).map((_, i) => (
            <button key={i} onClick={() => setCurrentPage(i + 1)} style={{ margin: '0 5px' }}>
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipesComponent;
