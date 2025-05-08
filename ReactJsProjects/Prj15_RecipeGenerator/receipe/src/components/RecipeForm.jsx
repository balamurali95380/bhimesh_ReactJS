import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addRecipe, updateRecipe } from '../redux/recipeSlice';

const RecipeForm = ({ editData, setEditData }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: '',
    prepTime: '',
    servings: '',
    steps: '',
    ingredients: [],
  });

  useEffect(() => {
    if (editData) {
      setForm(editData);
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editData) {
      dispatch(updateRecipe({ id: editData.id, updatedRecipe: form }));
      setEditData(null);  // Reset the editing state
    } else {
      dispatch(addRecipe(form));
    }
    setForm({ name: '', prepTime: '', servings: '', steps: '', ingredients: [] });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mb-4">
      <input
        name="name"
        placeholder="Recipe Name"
        value={form.name}
        onChange={handleChange}
        required
        className="block w-full mb-2 border p-2"
      />
      <input
        name="prepTime"
        type="number"
        placeholder="Prep Time (minutes)"
        value={form.prepTime}
        onChange={handleChange}
        required
        className="block w-full mb-2 border p-2"
      />
      <input
        name="servings"
        type="number"
        placeholder="Servings"
        value={form.servings}
        onChange={handleChange}
        required
        className="block w-full mb-2 border p-2"
      />
      <textarea
        name="steps"
        placeholder="Cooking Steps"
        value={form.steps}
        onChange={handleChange}
        required
        className="block w-full mb-2 border p-2"
      />
      <textarea
        name="ingredients"
        placeholder="Ingredients (comma separated)"
        value={form.ingredients.join(', ')}
        onChange={(e) =>
          setForm({ ...form, ingredients: e.target.value.split(',').map((item) => item.trim()) })
        }
        required
        className="block w-full mb-2 border p-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {editData ? 'Update Recipe' : 'Add Recipe'}
      </button>
    </form>
  );
};

export default RecipeForm;
