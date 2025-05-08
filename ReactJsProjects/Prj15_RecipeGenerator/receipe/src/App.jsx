import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';

const App = () => {
  const [editData, setEditData] = useState(null);

  return (
    <Provider store={store}>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">🍽 Recipe Generator</h1>
        <RecipeForm editData={editData} setEditData={setEditData} />
        <RecipeList setEditData={setEditData} />
      </div>
    </Provider>
  );
};

export default App;
