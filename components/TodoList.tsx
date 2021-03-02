import React, { useCallback } from 'react';
import useTodos from '../hooks/useTodos';

const TodoList = () => {
  const [todos, { remove, toggle }] = useTodos();
  const onToggle = useCallback((id: string) => {
    toggle(id);
  }, []);
  const onRemove = useCallback((id: string) => {
    remove(id);
  }, []);

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
        >
          <input
            type="checkbox"
            name="todocheck"
            defaultChecked={todo.done}
            onChange={() => onToggle(todo.id)}
          />
          <label
            htmlFor="todocheck"
            style={{ textDecoration: todo.done ? 'line-through' : '' }}
          >
            {todo.text}
          </label>
          <button type="button" onClick={() => onRemove(todo.id)}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
