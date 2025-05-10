import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import VocabularyForm from './components/VocabularyForm';
import VocabularyList from './components/VocabularyList';

const App = () => {
  return (
    <Provider store={store}>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">📚 Language Learning App</h1>
        <VocabularyForm />
        <VocabularyList />
      </div>
    </Provider>
  );
};

export default App;
