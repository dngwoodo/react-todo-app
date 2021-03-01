import { combineReducers } from '@reduxjs/toolkit';
import todos from './todosSlice';

const rootReducer = combineReducers({
  todos,
});

export default rootReducer;
