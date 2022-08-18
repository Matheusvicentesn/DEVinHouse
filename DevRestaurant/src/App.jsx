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
        <main className="card">
          <CriaCards nome="pizzas" produtos={lista.pizza} />
          <CriaCards nome="bebidas" produtos={lista.bebidas} />
          <CriaCards nome="Pratos Principais" produtos={lista.pratos_principais} />
          <CriaCards nome="Sobremesas" produtos={lista.sobremesas} />
          <CriaCards nome="Saladas" produtos={lista.saladas} />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
