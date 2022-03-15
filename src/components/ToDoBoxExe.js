import React from 'react';
import style from './ToDoBoxExe.module.css';
import TodoItemExe from './TodoItemExe';

const ToDoBoxExe = ({
  title,
  stateExecutando,
  setStateExecutando,
  stateFinalizado,
  setStateFinalizado,
}) => {
  const [info, setInfo] = React.useState('');
  const inputClear = React.useRef(null);

  function handleChange({ target }) {
    setInfo(target.value);
  }
  function handleSubmit() {
    if (info.length !== 0) {
      setStateExecutando([...stateExecutando, info]);
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
        {stateExecutando.length !== 0
          ? stateExecutando.map((l, i) => (
              <TodoItemExe
                l={l}
                i={i}
                setStateExecutando={setStateExecutando}
                stateExecutando={stateExecutando}
                stateFinalizado={stateFinalizado}
                setStateFinalizado={setStateFinalizado}
              />
            ))
          : 'Não Há Tarefas'}
        {console.log(stateExecutando)}
      </p>
    </div>
  );
};

export default ToDoBoxExe;
