import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import Counter from './components/Counter';

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
