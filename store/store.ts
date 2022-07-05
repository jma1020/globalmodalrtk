import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slice/counterSlice';
import modalReducer from '../slice/modalSlice';

// redux

const devMode = process.env.NODE_ENV === 'development';
// 아니 이건 왜 요렇게 쓰는거지
// next-redux-wrapper만 추가 설정 해주면 될듯

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
