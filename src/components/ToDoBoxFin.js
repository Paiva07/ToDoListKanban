import React from 'react';
import style from './ToDoBoxFin.module.css';
import TodoItemFin from './TodoItemFin';

const ToDoBoxFin = ({ title, stateFinalizado, setStateFinalizado }) => {
  const [info, setInfo] = React.useState('');
  const inputClear = React.useRef(null);

  function handleChange({ target }) {
    setInfo(target.value);
  }
  function handleSubmit() {
    if (info.length !== 0) {
      setStateFinalizado([...stateFinalizado, info]);
      inputClear.current.focus();
    } else {
      alert('Deve ser inserida Alguma informação ');
    }
  }
  function clearAll() {
    setStateFinalizado('');
  }

  return (
    <div className={style.box}>
      <h3>{title}</h3>
      <input
        className={style.input}
        type="text"
        onChange={handleChange}
        useRef={inputClear}
      />
      <button className={style.btn} onClick={handleSubmit}>
        Add Task
      </button>
      <p>
        {stateFinalizado.length !== 0
          ? stateFinalizado.map((l, i) => (
              <TodoItemFin
                stateFinalizado={stateFinalizado}
                setStateFinalizado={setStateFinalizado}
                l={l}
                i={i}
              />
            ))
          : 'Não Há Tarefas'}
      </p>
      {stateFinalizado.length !== 0 ? (
        <button onClick={clearAll} className={style.btn}>
          Limpar Lista
        </button>
      ) : null}
    </div>
  );
};

export default ToDoBoxFin;
