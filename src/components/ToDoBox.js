import React from 'react';
import style from './ToDoBox.module.css';
import TodoItem from './TodoItem';

const ToDoBox = ({
  title,
  statePendente,
  setStatePendente,
  stateExecutando,
  setStateExecutando,
}) => {
  const [info, setInfo] = React.useState('');
  const inputClear = React.useRef(null);

  function handleChange({ target }) {
    setInfo(target.value);
  }
  function handleSubmit() {
    if (info.length !== 0) {
      setStatePendente([...statePendente, info]);
      inputClear.current.focus();
    } else {
      alert('Deve ser inserida Alguma informação ');
    }
  }

  return (
    <div className={style.box}>
      <h3>{title}</h3>
      <input
        className={style.input}
        type="text"
        onChange={handleChange}
        ref={inputClear}
      />
      <button className={style.btn} onClick={handleSubmit}>
        Add Task
      </button>
      <p>
        {statePendente.length !== 0
          ? statePendente.map((l, i) => (
              <TodoItem
                statePendente={statePendente}
                setStatePendente={setStatePendente}
                setStateExecutando={setStateExecutando}
                stateExecutando={stateExecutando}
                l={l}
                i={i}
              />
            ))
          : 'Não Há Tarefas'}
      </p>
    </div>
  );
};

export default ToDoBox;
