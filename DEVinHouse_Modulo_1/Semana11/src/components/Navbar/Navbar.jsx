import { useCustomTheme } from "../../contexts/CustomTheme/useCustomTheme";
import { Container, Title } from "./Navbar.styled";
import logo from "../../assets/react.svg";
import { Button } from "../Button/Button";

export const Navbar = () => {
  const { handleTheme } = useCustomTheme();
  return (
    <Container>
      <img src={logo} alt="logo" />
      <Title>Perfils</Title>
      <Button onClick={handleTheme}>Alterar tema</Button>
    </Container>
  );
};
