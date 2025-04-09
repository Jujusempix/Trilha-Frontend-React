import { useState } from "react";

type ToggleVisibilidadeProps = {
  texto: string;
};

const ToggleVisibilidade = ({ texto }: ToggleVisibilidadeProps) => {
  const [visivel, setVisivel] = useState(false);

  const alternarVisibilidade = () => {
    setVisivel(!visivel);
  };

  return (
    <div>
      <button onClick={alternarVisibilidade}>
        {visivel ? "Ocultar" : "Mostrar"}
      </button>

      {visivel && <p>{texto}</p>}
    </div>
  );
};

export default ToggleVisibilidade;
