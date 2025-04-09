import Contador from "./components/Contador";
import "./App.css";
import Saudacao from "./components/Saudacao";
import ListaTarefas from "./components/ListaTarefas";
import ToggleVisibilidade from "./components/ToggleVisibilidade";

function App() {
  return (
    <div>
      <div>
        <h2>Exercicio 1</h2>
        <Contador />
      </div>
      <div>
        <h2>Exercicio 2</h2>
        <Saudacao />
      </div>
      <div>
        <h2>Exercicio 3</h2>
        <ListaTarefas />
      </div>
      <div>
        <h2>Exercicio 4</h2>
        <ToggleVisibilidade texto="Esse é o texto que pode ser exibido ou ocultado." />
      </div>
    </div>
  );
}

export default App;
