import "./App.css";
import { Button } from "./components/Button";
import ProfileCard from "./components/ProfileCard";
import Card from "./components/Card";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div>
      <div>
        <h2>Exercicio 1</h2>
        <Button />
      </div>
      <div>
        <h2>Exercicio 2</h2>
        <ProfileCard />
      </div>
      <div>
        <h2>Exercicio 3</h2>
        <Card header="Raiju" texto="Poltergaist" footer="Oni"></Card>
      </div>
      <div>
        <h2>Exercicio 4</h2>
        <Gallery />
      </div>
      <div>
        <h2>Exercicio 5</h2>
        <Navbar />
      </div>
      <div>
        <h2>Exercicio 6</h2>
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
