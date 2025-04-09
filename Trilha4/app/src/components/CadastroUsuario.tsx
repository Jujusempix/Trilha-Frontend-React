import React, { useState } from "react";

function CadastroUsuario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  const cadastrarUsuario = async () => {
    if (!nome || !email) {
      setErro("Preencha todos os campos.");
      setMensagem("");
      return;
    }

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: nome, email }),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao cadastrar usuário");
      }

      const data = await response.json();
      setMensagem(`Usuário ${data.name} cadastrado com sucesso!`);
      setErro("");
      setNome("");
      setEmail("");
    } catch (error) {
      setErro(error.message);
      setMensagem("");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-xl font-bold mb-4">Cadastrar Novo Usuário</h2>

      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome"
        className="border p-2 w-full mb-2 rounded"
      />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border p-2 w-full mb-2 rounded"
      />

      <button
        onClick={cadastrarUsuario}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Cadastrar
      </button>

      {mensagem && <p className="text-green-600 mt-4">{mensagem}</p>}
      {erro && <p className="text-red-500 mt-4">{erro}</p>}
    </div>
  );
}

export default CadastroUsuario;
