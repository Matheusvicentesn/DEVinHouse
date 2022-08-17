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



function App() {
  return (
    <div className="container">
      <NavBar />
      <div className="gallery">

      </div>
      <Footer />
    </div>
  );
}

export default App;
