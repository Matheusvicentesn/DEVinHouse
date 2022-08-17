import "./App.css";
import { Fragment } from "react";

// Componentes
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import CriaCards from "./components/CriaCards/CriaCards";

// Imagens
import Coffe from "./assets/img/coffe.jpg";

//lista
import lista from "./data.json";



function App() {
  return (
    <div className="container">
      <NavBar />
      <div className="gallery">
        <CriaCards nome="pizza" produtos={lista.pizza} />
        <CriaCards nome="bebidas" produtos={lista.bebidas} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
