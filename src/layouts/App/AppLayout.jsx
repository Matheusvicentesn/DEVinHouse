import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { useCustomTheme } from "../../contexts/CustomTheme/useCustomTheme";
import { Navbar } from "../../components/Navbar/Navbar";
import { PerfilProvider } from "../../contexts/Perfil/PerfilProvider";
import { GlobalStyle } from "../../themes";
import { Profile } from "../../components";
export const AppLayout = ({ children }) => {
  const { theme } = useCustomTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <PerfilProvider>
        <Profile />
      </PerfilProvider>
    </ThemeProvider>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node,
};
