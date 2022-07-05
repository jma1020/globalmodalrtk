import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import reducer from '../slice/wrapper';

const makeStore = () =>
  configureStore({
    reducer,
  });

export const wrapper = createWrapper(makeStore);

// 이거는 next-redux-wrapper 적용 하는 store
