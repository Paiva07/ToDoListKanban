import React from 'react';
import '../App.css';

const TodoItemExe = ({
  l,
  i,
  setStateFinalizado,
  stateFinalizado,
  stateExecutando,
  setStateExecutando,
}) => {
  function handleClick() {
    const dados = stateExecutando.splice(i, 1);
    setStateFinalizado([...stateFinalizado, dados]);
  }
  return (
    <div key={i} className="containerBox">
      <ul>
        <li>{l}</li>
        <button onClick={handleClick} className="btn">
          Check
        </button>
      </ul>
    </div>
  );
};

export default TodoItemExe;
