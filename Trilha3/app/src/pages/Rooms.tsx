import { Link } from "react-router";
import "./Rooms.css";

const Rooms = () => {
  const rooms = [
    { id: "101", name: "Quarto Deluxe" },
    { id: "102", name: "Quarto Econômico" },
    { id: "103", name: "Suíte Presidencial" },
  ];

  return (
    <div>
      <h2>Quartos Disponíveis</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <Link to={`/rooms/${room.id}`}>{room.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rooms;
