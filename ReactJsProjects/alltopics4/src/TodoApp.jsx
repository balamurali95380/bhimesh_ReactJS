import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h2>Todo App</h2>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoApp;
