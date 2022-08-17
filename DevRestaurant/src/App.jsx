import "./App.css";
import { Fragment } from "react";

// Componentes
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import CriaCards from "./components/List/List";

// Imagens
import Coffe from "./assets/img/coffe.jpg";

//lista
import lista from "./data.json";

// ESSA PARTE

// export const CriaCards = ({ nome, produtos }) => {
//   return (
//     <Fragment>
//       <h1>{nome}</h1>
//       {produtos.map((produto) => (
//         <Cards
//           key={produto.id}
//           img={produto.img}
//           nome={produto.nome}
//           descricao={produto.desc}
//           tempo={produto.tempo}
//           preco={produto.preco}
//         ></Cards>
//       ))}
//     </Fragment>
//   );
// };

function App() {
  return (
    <div className="container">
      <NavBar />
      <div className="gallery">
        <CriaCards nome="pizza" produtos={lista.pizza} />
        <CriaCards nome="bebidas" produtos={lista.bebidas} />
      </div>
      {/* ESSA PARTE */}
      <Footer />
    </div>
  );
}

export default App;
