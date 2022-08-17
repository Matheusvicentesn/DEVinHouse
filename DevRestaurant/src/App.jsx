import "./App.css";
import { Fragment } from "react";

// Componentes
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

// Imagens
import Coffe from "./assets/img/coffe.jpg";

//lista
import lista from "./data.json";

//ESSA PARTE

export const CriaCards = ({nome, produtos}) =>{
  return(
    <Fragment >
      {produtos.map((produto) => (
        <Cards key={produto.id} img={produto.img} nome={produto.nome} descricao={produto.desc} tempo={produto.tempo} preco={produto.preco}></Cards>
      ))}
    </Fragment>
  )
}

function App() {
  return (
    <div className="container">
      <NavBar />
      <div className="gallery">
        <Cards
          img={Coffe}
          nome="Café"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod ex sit amet eleifend posuere. Vivamus porta venenatis turpis, sit."
          tempo="15 minutos"
          preco="10 Reais"
        />
        <Cards
          img={Coffe}
          nome="Café"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod ex sit amet eleifend posuere. Vivamus porta venenatis turpis, sit."
          tempo="15 minutos"
          preco="10 Reais"
        />
      </div>
      {/* ESSA PARTE */}
      <CriaCards nome="pizza" produtos={lista}/>
      <Footer />
    </div>
  );
}

export default App;
