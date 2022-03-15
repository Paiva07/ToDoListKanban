import React from 'react';
import '../App.css';

const TodoItem = ({
  l,
  i,
  statePendente,
  setStatePendente,
  stateExecutando,
  setStateExecutando,
}) => {
  function handleClick() {
    const dados = statePendente.splice(i, 1);
    setStateExecutando([...stateExecutando, dados]);
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

export default TodoItem;
