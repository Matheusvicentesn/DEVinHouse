import { NavBarStyled } from "./Menu.styled";

export const Menu = () => {
  return (
    <>
      <NavBarStyled>
        <header>
          <div id="navbar">
            <img alt="" />
            <div id="navbar-right">
              <a to={"/"}>Inicio</a>
              <a to={"/dispositivos"}>Dispositivos</a>
              <a to={"/perfil"}>Perfil</a>
            </div>
          </div>
        </header>
      </NavBarStyled>
    </>
  );
};
