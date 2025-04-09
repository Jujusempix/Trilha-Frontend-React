import { useParams, useNavigate } from "react-router";

const RoomDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const reservar = () => {
    navigate("/success");
  };

  return (
    <div>
      <h2>Detalhes do Quarto {id}</h2>
      <p>Informações sobre o quarto {id}...</p>
      <button onClick={reservar}>Reservar</button>
    </div>
  );
};

export default RoomDetails;
