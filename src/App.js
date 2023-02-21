import './index.scss';
import React from 'react';

function App() {
  const [count, setCount] = React.useState(10)

  const countMinus = () =>{
    setCount(count - 1)
  }
  const countPlus = () =>{
    setCount(count + 1)
  }

  return (
    <div className="App">
      <div>
        <h2>Count:</h2>
        <h1>{count}</h1>
        <button onClick={countMinus} className="minus">- Minus</button>
        <button onClick={countPlus} className="plus">Plus +</button>
      </div>
    </div>
  );
}

export default App;
