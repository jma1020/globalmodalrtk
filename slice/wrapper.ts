import { AnyAction, combineReducers, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import counterReducer from './counterSlice';
import modalReducer from './modalSlice';

const reducer = (state: any, action: AnyAction) => {
  if (action.type == HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    counter: counterReducer,
    modal: modalReducer,
  })(state, action);
};

export default reducer;

// next-redux-wrapper 적용을 위한 코드
