import './botao.css'

export const Botao = () => {
  const handleClick = () => {
    console.log("clicou");
  };
  return (
    <button className="minhaClasse" onClick={handleClick}>
      Meu primeiro botão
    </button>
  );
};
