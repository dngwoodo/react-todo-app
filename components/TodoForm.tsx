import React, { useCallback, useState } from 'react';
import useTodoActions from '../hooks/useTodoActions';

const TodoForm = () => {
  // useState라는 hooks를 이용하면 리랜더링 될때 값들이 초기화되지 않고 예전 값들을 메모리에 올려두고 재사용한다.
  const [text, setText] = useState('');

  // 함수형 컴포넌트를 사용하면 리랜더링 될때 이 컴포넌트 전체가 다시 실행되므로 useCallback을 써서 메모리에 올려두고 memoization(캐싱)한다.
  // deps에 text를 넣어주는 이유는 함수가 리랜더링되었을 때 text가 바꼈으면 새로운 함수를 반환하고 아니면 메모리에 올려둔 함수를 반환하기 위해서이다.
  // 또한 usecallback은 자식에게 넘겨주는 함수일 경우에는 반드시 해주는 것이 좋다. 여기서 리랜더링 되면 자식도 리랜더링 되기버리기 때문이다.
  const inputOnChange = useCallback((e) => {
    setText(e.target.value);
  }, [text]); // text를 안넣어주면 리랜더링 시 값을 참조할때 최신값을 받아온다고 보장할 수 없음

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
      <input placeholder="할 일을 입력하세요" value={text} onChange={inputOnChange} />
      <button type="submit">등록</button>
    </form>
  );
};

export default TodoForm;
