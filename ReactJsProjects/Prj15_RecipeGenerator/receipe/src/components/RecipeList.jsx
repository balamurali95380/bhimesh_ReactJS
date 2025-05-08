import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeRecipe } from '../redux/recipeSlice';

const RecipeList = ({ setEditData }) => {
  // Ensure the state path is correct
  const { recipes } = useSelector((state) => state.recipeGenerator);  // Ensure this path is correct
  const dispatch = useDispatch();

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="border p-3 rounded mb-2">
          <h3 className="font-bold">{recipe.name}</h3>
          <p>Prep Time: {recipe.prepTime} minutes</p>
          <p>Servings: {recipe.servings}</p>
          <p>Ingredients: {recipe.ingredients.join(', ')}</p>
          <p>Steps: {recipe.steps}</p>
          <div className="mt-2">
            <button
              onClick={() => setEditData(recipe)}
              className="bg-yellow-400 px-3 py-1 rounded mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(removeRecipe(recipe.id))}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
