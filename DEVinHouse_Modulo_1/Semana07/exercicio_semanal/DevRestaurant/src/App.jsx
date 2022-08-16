import "./App.css";

// Componentes
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

// Imagens
import Coffe from "./assets/img/coffe.jpg";

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
      <Footer />
    </div>
  );
}

export default App;
