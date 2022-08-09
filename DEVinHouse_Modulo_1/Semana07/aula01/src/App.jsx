import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Botao } from "../components/botao/botao";
import { Header } from "../components/header/header";

function App() {
  return (
    <div>
      <Header>
        <Botao></Botao>
      </Header>
    </div>
  )


}

export default App
