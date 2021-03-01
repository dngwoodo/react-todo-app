import React, { useState } from 'react';
import { todosActions } from '../slices/todosSlice';
import { useAppDispatch } from '../store/configureStore';

const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();
  return (
    <form onSubmit={
      (e) => {
        e.preventDefault();
        dispatch(todosActions.add(text));
        setText('');
      }
    }
    >
      <input placeholder="할 일을 입력하세요" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">등록</button>
    </form>
  );
};

export default TodoForm;
