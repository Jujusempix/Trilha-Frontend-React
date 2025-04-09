import { useState } from "react";

type ToDo = {
  name: string;
  done: boolean;
};

const ListaTarefas = () => {
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [input, setInput] = useState<string>("");

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const addToDo = () => {
    if (!input.trim()) return;

    const newToDo: ToDo = {
      name: input,
      done: false,
    };

    setToDos([newToDo, ...toDos]);
    setInput("");
  };

  const concluirTarefa = (index: number) => {
    const novaLista = toDos.filter((_, i) => i !== index);
    setToDos(novaLista);
  };

  return (
    <div>
      <h2>Todo list</h2>

      <input placeholder="Tarefa: " value={input} onChange={onChangeInput} />
      <button onClick={addToDo}>Adicionar</button>

      <ul className="container">
        {toDos.map((todo, index) => (
          <li key={index}>
            {todo.name}{" "}
            <button onClick={() => concluirTarefa(index)}>Concluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTarefas;
