import { useCustomTheme } from "../../contexts/CustomTheme/useCustomTheme";
import { Button, Container, Title } from "./NavBar.styled";
import logo from "../../assets/react.svg";

export const NavBar = () => {
  const { handleTheme } = useCustomTheme();
  return (
    <Container>
      <img src={logo} alt="logo" />
      <Title>Perfils</Title>
      <Button onClick={handleTheme}>Alterar tema</Button>
    </Container>
  );
};
