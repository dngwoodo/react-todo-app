/* eslint-disable no-undef */
import { renderHook, act } from '@testing-library/react-hooks';
import { filterActions } from '../slices/filterSlice';
import { RootState } from '../store/configureStore';
import prepareReduxWrapper from '../store/prepareReduxWrapper';
import useFilteredTodos from './useFilteredTodos';

describe('useFilteredTodos', () => {
  const initialState: RootState = { // filterSlice.reducer, todosSlice.reducer를 더한 rootReducer 리턴타입
    filter: 'ALL',
    todos: [
      {
        id: '1',
        text: '컴포넌트 만들기',
        done: false,
      },
      {
        id: '2',
        text: '테스트 코드 작성하기',
        done: false,
      },
    ],
  };

  const setup = () => {
    // 이 부분을 테스트하기 위해선 Provider에 hooks를 넣은 컴포넌트가 필요하다.
    const [wrapper, store] = prepareReduxWrapper(initialState);
    const { result } = renderHook(() => useFilteredTodos(), { wrapper });
    return { store, result };
  };

  // userFilterTodos 컴포넌트의 목적은 filter 상태에 따라 Todos데이터를 반환해주는 것
  // Testing 해야 될 것
  // 1. todos 보여주기 동작
  // 2. todo를 토글했을 경우 동작
  // 3. filters todos 동작
  // 4. remove todo 동작
  it('properly shows todos', () => {
    const { result } = setup();
    // console.log(result.current); // [FilteredTodos, actions] <- useFilteredTodos의 반환값을 의미
    expect(result.current[0]).toHaveLength(2); // FilteredTodos의 배열길이가 2이다. 결국 Filter = 'All'이라는 것
  });

  it('toggles todo', () => {
    const { result } = setup();
    // 첫번째 항목 토글
    act(() => {
      result.current[1].toggle('1'); // todosSlice의 actions.toggle을 실행시킴
    });
    expect(result.current[0][0].done).toBe(true);

    // 첫번째 항목 토글
    act(() => {
      result.current[1].toggle('1'); // todosSlice의 actions.toggle을 실행시킴
    });
    expect(result.current[0][0].done).toBe(false);
  });

  it('filters todos', () => {
    const { result, store } = setup();
    // eslint-disable-next-line max-len
    // console.log(filterActions.applyFilter('DONE')); // { type: 'filter/applyFilter', payload: 'DONE' }

    // * 첫번째 항목 토글
    // * filterSlice의 filter를 DONE으로 변경
    act(() => {
      result.current[1].toggle('1'); // done: true
      store.dispatch(filterActions.applyFilter('DONE')); // dispatch를 통해 action을 실행시킴, filterSlice.actions.applyFilter는 인자를 받아서 액션생성을 하는 actionCreator이다.
    });

    expect(result.current[0][0].text).toBe('컴포넌트 만들기');
    expect(result.current[0].length).toBe(1);

    // * filterSlice의 filter를 UNDONE으로 변경
    act(() => {
      store.dispatch(filterActions.applyFilter('UNDONE')); // dispatch를 통해 action을 실행시킴, filterSlice.actions.applyFilter는 인자를 받아서 액션생성을 하는 actionCreator이다.
    });

    expect(result.current[0][0].text).toBe('테스트 코드 작성하기');
    expect(result.current[0].length).toBe(1);

    // * filterSlice의 filter를 ALL로 변경
    act(() => {
      store.dispatch(filterActions.applyFilter('ALL')); // dispatch를 통해 action을 실행시킴, filterSlice.actions.applyFilter는 인자를 받아서 액션생성을 하는 actionCreator이다.
    });
    expect(result.current[0].length).toBe(2);
  });

  it('removes todo', () => {
    const { result } = setup();
    act(() => {
      result.current[1].remove('1'); // filterSlice.actions.remove 사용
    });
    expect(result.current[0].length).toBe(1);
  });
});
