import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addIngredient } from '../redux/recipeSlice';

const IngredientForm = () => {
  const dispatch = useDispatch();
  const [ingredient, setIngredient] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addIngredient({ name: ingredient }));
    setIngredient('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mb-4">
      <input 
        placeholder="Add Ingredient" 
        value={ingredient} 
        onChange={(e) => setIngredient(e.target.value)} 
        required 
        className="block w-full mb-2 border p-2" 
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Add Ingredient
      </button>
    </form>
  );
};

export default IngredientForm;
