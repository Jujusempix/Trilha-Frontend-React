import { useState } from "react";
import "./Saudacao.css";

const Saudacao = () => {
  const [nome, setNome] = useState();

  const handleChange = (event) => {
    setNome(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={nome}
        onChange={handleChange}
        placeholder="Digite seu nome"
      />
      <h1>Olá, {nome}!</h1>
    </div>
  );
};

export default Saudacao;
