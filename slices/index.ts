import { combineReducers } from '@reduxjs/toolkit';
import filter from './filterSlice';
import todos from './todosSlice';

const rootReducer = combineReducers({
  todos,
  filter,
});

export default rootReducer;
