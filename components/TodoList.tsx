import React from 'react';
import useTodos from '../hooks/useTodos';

const TodoList = () => {
  const [todos] = useTodos();
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
