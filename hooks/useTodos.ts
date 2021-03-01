import { useAppSelector } from '../store/configureStore';

const useTodos = () => {
  const todos = useAppSelector((state) => state.todos);
  return todos;
};

export default useTodos;
