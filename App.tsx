import React from 'react';
import TodoFilters from './components/TodoFilters';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => (
  <div>
    <TodoForm />
    <TodoList />
    <TodoFilters />
  </div>
);

export default App;
