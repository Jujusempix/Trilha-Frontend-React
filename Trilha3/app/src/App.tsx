import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import { Link } from "react-router";
import Animal from "./pages/Animal";
import RoomDetails from "./pages/RoomDetail";
import Rooms from "./pages/Rooms";
import BookingSuccess from "./pages/BookingSuccess";

function App() {
  return (
    <BrowserRouter>
      <nav className="Navbar">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/contact">
          Contact
        </Link>
        <Link className="link" to="/animal/camaleão">
          Animal
        </Link>
        <Link className="link" to="/rooms">
          Quartos
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
        <Route path="/success" element={<BookingSuccess />} />
        <Route path="/animal/:name" element={<Animal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
