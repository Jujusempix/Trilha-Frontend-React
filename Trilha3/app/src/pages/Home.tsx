import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const About = () => {
    navigate("/about");
  };

  return (
    <div>
      <h2>Página Inicial</h2>
      <button onClick={About}>Ir para Sobre</button>
    </div>
  );
};

export default Home;
