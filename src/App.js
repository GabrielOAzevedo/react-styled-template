import React from 'react';
import './App.css';
import Button from './base-components/Button';
import { useSelector } from 'react-redux';

function App() {

  const count = useSelector(state => state.count);

  return (
    <div className="App">
      <header className="App-header">
        <p>Count: {count}</p>
        <Button>Increment</Button>
      </header>
    </div>
  );
}

export default App;
