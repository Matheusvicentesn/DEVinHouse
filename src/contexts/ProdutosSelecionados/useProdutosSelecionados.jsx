import { useContext } from "react"
import { ProdutosSelecionadosContext } from "."

export const useProdutosSelecionados = () =>{
    const context = useContext(ProdutosSelecionadosContext)

    return context
}
