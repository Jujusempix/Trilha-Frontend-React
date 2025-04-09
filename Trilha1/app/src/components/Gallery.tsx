import "./Gallery.css";
import bloodbone1 from "../assets/Bloodborne1.jpg";
import bloodbone2 from "../assets/Bloodborne2.jpg";
import julio from "../assets/julio.jpg";
import minecraft from "../assets/minecraft.jpeg";

const Gallery = () => {
  return (
    <div className="container2">
      <img src={bloodbone1} alt="" />
      <img src={bloodbone2} alt="" />
      <img src={julio} alt="" />
      <img src={minecraft} alt="" />
    </div>
  );
};

export default Gallery;
