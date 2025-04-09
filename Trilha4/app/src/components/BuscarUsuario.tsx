import { useState } from "react";

function BuscarUsuario() {
  const [id, setId] = useState("");
  const [usuario, setUsuario] = useState(null);
  const [erro, setErro] = useState("");

  const buscarUsuario = async () => {
    if (!id) {
      setErro("Digite um ID válido.");
      setUsuario(null);
      return;
    }

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      if (!response.ok) {
        throw new Error("Usuário não encontrado");
      }
      const data = await response.json();
      setUsuario(data);
      setErro("");
    } catch (error) {
      setUsuario(null);
      setErro(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-xl font-bold mb-4">Buscar Usuário por ID</h2>
      <input
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Digite o ID do usuário"
        className="border p-2 w-full mb-2 rounded"
      />
      <button
        onClick={buscarUsuario}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Buscar
      </button>

      {usuario && (
        <div className="mt-4">
          <p>
            <strong>Nome:</strong> {usuario.name}
          </p>
          <p>
            <strong>Email:</strong> {usuario.email}
          </p>
        </div>
      )}

      {erro && <p className="text-red-500 mt-4">{erro}</p>}
    </div>
  );
}

export default BuscarUsuario;
