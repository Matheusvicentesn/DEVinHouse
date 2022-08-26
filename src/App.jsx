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
import Secoes from "./components/Secoes/Secoes";

// API
let lista = [];

lista = await fetch("https://nodeapidevinrestaurant.herokuapp.com/data")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return data;
  });

console.log(lista);

// filtros
const subSecoesPizzas = new Set(lista.pizza.map((p) => p.subSecao));
const subSecoesBebidas = new Set(lista.bebidas.map((p) => p.subSecao));
const subSecoesPratosPrincipais = new Set(
  lista.pratos_principais.map((p) => p.subSecao)
);

//listas
// import lista from "./data.json";
const secoes = [
  { nome: "pizzas", produtos: lista.pizza, subSecoes: subSecoesPizzas },
  { nome: "bebidas", produtos: lista.bebidas, subSecoes: subSecoesBebidas },
  {
    nome: "Pratos Principais",
    produtos: lista.pratos_principais,
    subSecoes: subSecoesPratosPrincipais,
  },
  { nome: "sobremesas", produtos: lista.sobremesas, subSecoes: new Set() },
  { nome: "saladas", produtos: lista.saladas, subSecoes: new Set() },
];


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
            {secoes.map((secao) => {
              return (
                <Fragment key={secao.nome}>
                  {(!filter || filter == secao.nome) && (
                    <Secoes
                      nome={secao.nome}
                      produtos={secao.produtos}
                      subSecoes={filter ? Array.from(secao.subSecoes) : []}
                      aoFiltrar={handleFiltrar}
                    />
                  )}
                </Fragment>
              );
            })}
          </main>
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
