import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../features/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <div>
        <button
          style={{ margin: '5px', padding: '10px 20px' }}
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          style={{ margin: '5px', padding: '10px 20px' }}
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          style={{ margin: '5px', padding: '10px 20px', backgroundColor: 'red', color: 'white' }}
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
