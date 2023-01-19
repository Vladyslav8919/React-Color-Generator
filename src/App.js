import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [colorsNumber, setColorsNumber] = useState('');
  const [list, setList] = useState(new Values('#ccc').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setList(new Values(color).all(colorsNumber));
      setError(false);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="color (e.g. #ccc)"
            className={`${error ? 'error' : null}`}
          />
          <input
            type="number"
            value={colorsNumber}
            onChange={(e) => setColorsNumber(parseInt(e.target.value))}
            placeholder="step (e.g. 10)"
            className={`${error ? 'error' : null}`}
            max={100}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              list={list}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
