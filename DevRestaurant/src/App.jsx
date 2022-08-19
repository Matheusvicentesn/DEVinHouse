import "./App.css";
import { Fragment } from "react";

// Componentes
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import CriaCards from "./components/CriaCards/CriaCards";
import Menu from "./components/Menu/Menu";

// Imagens
import Coffe from "./assets/img/coffe.jpg";

//lista
import lista from "./data.json";
import Produtos from "./components/Produtos/Produtos";
const subSecoesPizzas = new Set(lista.pizza.map((p) => p.subSecao));
const subSecoesBebidas = new Set(lista.bebidas.map((p) => p.subSecao));
console.log(subSecoesPizzas, subSecoesBebidas);



function App() {
  return (
    <div className="container">
      <NavBar />
      <Menu></Menu>

      <div className="gallery">
        <main className="card">
          <Produtos nome="pizza" produtos={lista.pizza} subSecao={subSecoesPizzas}/>
          <Produtos nome="bebidas" produtos={lista.bebidas} subSecao={subSecoesBebidas}/>
          <Produtos nome="Pratos Principais" produtos={lista.pratos_principais}/>
          <Produtos nome="sobremesas" produtos={lista.sobremesas}/>
          <Produtos nome="saladas" produtos={lista.saladas}/>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
