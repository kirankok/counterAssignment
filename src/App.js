import React, {
  useEffect,
  useState,
  useRef,
} from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(() => {
    if (localStorage.getItem('prevCount') === null) {
      return 0;
    } else {
      return localStorage.getItem('prevCount');
    }
  });

  const countRef = useRef();
  useEffect(() => {
    countRef.current = value;
    if (countRef.current) {
      localStorage.setItem('prevCount', countRef.current);
    } else {
      localStorage.setItem('prevCount', 0);
    }
  });

  const handleIncrement = () => {
    setValue((value) => +value + 1);
  };

  const handleDecrement = () => {
    if (value === 0) {
      return;
    } else {
      setValue((value) => value - 1);
    }
  };

  console.log(
    'prevVal',
    localStorage.getItem('prevCount')
  );

  return (
    <div className="card">
      <label className="counterLabel">Simple Counter</label>
      <button
        className="button"
        onClick={handleIncrement}
      >
        Increment
      </button>
      <span className="count">{value}</span>
      <button
        className="button"
        onClick={handleDecrement}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
