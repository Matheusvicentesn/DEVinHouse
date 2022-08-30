import { useContext } from "react"
import ProdutosSelecionadosContext from "./ProdutosSelecionadosContext"

const useProdutosSelecionados = () =>{
    const context = useContext(ProdutosSelecionadosContext)

    return context
}

export default useProdutosSelecionados