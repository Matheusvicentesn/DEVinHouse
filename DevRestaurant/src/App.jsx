import "./App.css";
import { Fragment } from "react";
import { useEffect, useState } from "react";

// Componentes
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import CriaCards from "./components/CriaCards/CriaCards";
import Menu from "./components/Menu/Menu";
import Produtos from "./components/Produtos/Produtos";

// Imagens
import Coffe from "./assets/img/coffe.jpg";

//lista
import lista from "./data.json";
import Secoes from "./components/Secoes/Secoes";

// filtros
const subSecoesPizzas = new Set(lista.pizza.map((p) => p.subSecao));
const subSecoesBebidas = new Set(lista.bebidas.map((p) => p.subSecao));
const subSecoesPratosPrincipais = new Set(lista.pratos_principais.map((p) => p.subSecao));


function App() {
  const [filter, setFilter] = useState(null);
  function handleFiltrar(filtro) {
    setFilter(filtro);
  }

  return (
    <div className="app">
      <NavBar />
      <Menu aoFiltrar={handleFiltrar} />
      <div className="main">
        {
          <main className="card">
            {(!filter || filter == "pizzas") && (
              <Secoes
                nome="pizza"
                produtos={lista.pizza}
                subSecoes={Array.from(subSecoesPizzas)}
              />
            )}
            {(!filter || filter == "bebidas") && (
              <Secoes
                nome="bebidas"
                produtos={lista.bebidas}
                subSecoes={Array.from(subSecoesBebidas)}
              />
            )}
            {(!filter || filter == "pratos_principais") && (
              <Secoes
                nome="Pratos Principais"
                produtos={lista.pratos_principais}
                subSecoes={Array.from(subSecoesPratosPrincipais)}
              />
            )}
            {(!filter || filter == "sobremesas") && (
              <Secoes nome="sobremesas" produtos={lista.sobremesas} />
            )}
            {(!filter || filter == "saladas") && (
              <Secoes nome="saladas" produtos={lista.saladas} />
            )}
          </main>
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
