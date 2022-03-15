import React from 'react';
import '../App.css';

const TodoItemFin = ({ l, i, stateFinalizado, setStateFinalizado }) => {
  return (
    <div key={i} className="containerBox">
      <ul>
        <li>{l}</li>
      </ul>
    </div>
  );
};

export default TodoItemFin;
