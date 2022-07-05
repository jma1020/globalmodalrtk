import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../slice/counterSlice';
import type { RootState } from '../../store/store';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  console.log(count);
  console.log(dispatch);

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>increment</button>
        <span>sad</span>
      </div>
    </div>
  );
};

export default Counter;
