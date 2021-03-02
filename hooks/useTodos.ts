import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { todosActions } from '../slices/todosSlice';
import { useAppDispatch, useAppSelector } from '../store/configureStore';

// todosSlice의 state와 action을 반환해주는 커스텀훅
const useTodos = () => {
  const dispatch = useAppDispatch(); // dispatch
  const todos = useAppSelector((state) => state.todos); // state의 todos를 가져옴

  // bindActionCreators는 리덕스를 모르는 컴포넌트들에게 actioin creator를 전달할 때 사용
  // 그리고 dispatch 또는 redux store를 컴포넌트들에게 전달하는 것을 원하지 않을 때 사용
  const actions = useMemo(() => bindActionCreators(todosActions, dispatch), [dispatch]);

  return [todos, actions] as const;
};

export default useTodos;

// 이렇게 훅스로 따로 분리해주는 이유는 상태 관련 로직을 따로 빼주기 위해서이다.
// 원래 클래스에서는 container / presenter로 사용되었지만 hooks가 나오면서 Dan Abramov가 권장하지 않는다고 했기 때문.
// Dan Abramov는 hooks를 통해 동일한 작업을 할 수 있다고 했는데 이런 방법을 사용하면 가능할 것 같다.
