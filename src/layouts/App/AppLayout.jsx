import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { useCustomTheme } from "../../contexts/CustomTheme/useCustomTheme";
import { NavBar } from "../../components/NavBar/NavBar";
export const AppLayout = ({ children }) => {
  const { theme } = useCustomTheme();
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      {children}
    </ThemeProvider>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node,
};
