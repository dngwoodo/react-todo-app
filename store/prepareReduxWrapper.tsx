import { configureStore } from '@reduxjs/toolkit';
import React, { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import rootReducer from '../slices';
import { RootState } from './configureStore';

const prepareReduxWrapper = (initialState: RootState) => {
  const store = configureStore({ reducer: rootReducer, preloadedState: initialState });
  // eslint-disable-next-line max-len
  const wrapper = ({ children }: {children: ReactNode}):ReactElement => (<Provider store={store}>{children}</Provider>);
  return [wrapper, store] as const;
};

export default prepareReduxWrapper;
