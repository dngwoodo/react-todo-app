import React, { useCallback } from 'react';
import useFilteredTodos from '../hooks/useFilteredTodos';

const TodoList = () => {
  // eslint-disable-next-line max-len
  const [todos, { remove, toggle }] = useFilteredTodos(); // 이 아이는 filter나 todos가 바뀌면 알아서 바뀜. 그러면서 react-redux가 컴포넌트 리랜더링 시킴
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
