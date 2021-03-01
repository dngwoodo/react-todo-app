import React, { useState } from 'react';
import useTodoActions from '../hooks/useTodoAction';

const TodoForm = () => {
  const [text, setText] = useState('');
  const { add } = useTodoActions();
  return (
    <form onSubmit={
      (e) => {
        e.preventDefault();
        add(text);
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
