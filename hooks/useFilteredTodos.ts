import { useMemo } from 'react';
import useFilter from './useFilter';
import useTodo from './useTodos';

const useFilteredTodos = () => {
  const [todos, actions] = useTodo(); // state에 todos를 받아옴, todosSlcie의 actions를 받아옴
  const [filter] = useFilter(); // state에 filter를 받아옴

  // filter가 ALL이면 todos를 반환
  // filter가 DONE이면 todo.done === true인 아이들 반환
  // filter가 UNDONE이면 todo.done === false인 아이들 반환
  const filteredTodos = useMemo(() => (filter === 'ALL' ? todos : todos.filter((todo) => todo.done === (filter === 'DONE'))), [todos, filter]); // todos랑 filter의 변하면 다시 실행

  return [filteredTodos, actions] as const; // 외부에서 바꿀 수 없게 type을 as const로 지정
};

export default useFilteredTodos;
