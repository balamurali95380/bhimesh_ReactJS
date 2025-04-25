import React from 'react';

const RecipeCard = ({ recipe, isFavorite, onEdit, onDelete, onToggleFavorite }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '15px',
      marginBottom: '10px',
      backgroundColor: '#f9f9f9'
    }}>
      <h3>{recipe.name}</h3>
      <p><strong>Category:</strong> {recipe.category}</p>
      <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
      <p><strong>Prep Time:</strong> {recipe.prepTime} | <strong>Servings:</strong> {recipe.servings}</p>
      <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
      
      <div style={{ marginTop: '10px' }}>
        <button onClick={() => onEdit(recipe)}>✏️ Edit</button>
        <button onClick={() => onDelete(recipe.name)} style={{ marginLeft: '10px' }}>🗑️ Delete</button>
        <button onClick={() => onToggleFavorite(recipe.name)} style={{ marginLeft: '10px' }}>
          {isFavorite ? '⭐ Unfavorite' : '☆ Favorite'}
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
