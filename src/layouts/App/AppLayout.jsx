import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { useCustomTheme } from "../../contexts/CustomTheme/useCustomTheme";
export const AppLayout = ({ children }) => {
  const { theme } = useCustomTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

AppLayout.propTypes = {
  children: PropTypes.node,
};
