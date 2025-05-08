import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeIngredient } from '../redux/recipeSlice';

const IngredientList = () => {
  const { ingredients } = useSelector((state) => state.recipe);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Ingredient List</h2>
      {ingredients.map((ingredient) => (
        <div key={ingredient.id} className="border p-3 rounded mb-2">
          <p>{ingredient.name}</p>
          <button onClick={() => dispatch(removeIngredient(ingredient.id))} className="bg-red-500 text-white px-3 py-1 rounded">Remove</button>
        </div>
      ))}
    </div>
  );
};

export default IngredientList;
