import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { Todo } from '../types/Todo';

const initialState = [] as Todo[];

const todosSlice = createSlice({
  name: 'todos', // action type을 생성할때 prefix로 사용된다.
  // createSlice는 reducers에 사용되는 state의 타입을 initalState로 추론한다.
  initialState,
  reducers: {
    // customizing generated action creators
    // prepare, reducer 사용
    add: { // 'add'는 action type으로 사용된다.
      // 받은 값을 변형시킬때 사용. text만 받아서 id, done을 여기서 추가시킴
      prepare: (text: string) => ({
        payload: {
          id: nanoid(),
          done: false,
          text,
        },
      }),
      // 리듀서 역할(값을 state에 집어넣음)
      reducer(state, action: PayloadAction<Todo>) {
        state.push(action.payload);
      },
    },
  },
});

export const todosActions = todosSlice.actions;
export default todosSlice.reducer;
