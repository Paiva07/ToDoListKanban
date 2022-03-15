import React from 'react';
import './App.css';
import Header from './components/Header';
import ToDoBox from './components/ToDoBox';
import ToDoBoxExe from './components/ToDoBoxExe';
import ToDoBoxFin from './components/ToDoBoxFin';

function App() {
  const [statePendente, setStatePendente] = React.useState([]);
  const [stateExecutando, setStateExecutando] = React.useState([]);
  const [stateFinalizado, setStateFinalizado] = React.useState([]);
  return (
    <div>
      <Header />
      <div className="container">
        <ToDoBox
          title="Pendente"
          statePendente={statePendente}
          setStatePendente={setStatePendente}
          stateExecutando={stateExecutando}
          setStateExecutando={setStateExecutando}
        />
        <ToDoBoxExe
          title="Executando"
          stateExecutando={stateExecutando}
          setStateExecutando={setStateExecutando}
          stateFinalizado={stateFinalizado}
          setStateFinalizado={setStateFinalizado}
        />
        <ToDoBoxFin
          title="Finalizado"
          stateFinalizado={stateFinalizado}
          setStateFinalizado={setStateFinalizado}
        />
      </div>
    </div>
  );
}

export default App;
