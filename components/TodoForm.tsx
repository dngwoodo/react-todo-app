import React, { useState } from 'react';

const TodoForm = () => {
  const [text, setText] = useState('');
  return (
    <form onSubmit={
      (e) => {
        e.preventDefault();
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
