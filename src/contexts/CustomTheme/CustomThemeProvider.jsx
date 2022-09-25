import { CustomThemeContext } from "./CustomThemeContext";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { getTheme, setTheme } from "../../utils";
import { themeDark, themeLight } from "../../themes";

export const CustomThemeProvider = ({ children }) => {
  const [isDark, setDark] = useState(true);

  useEffect(() => {
    setDark(getTheme());
  }, []);

  const handleTheme = () => {
    setDark((prev) => {
      const newValue = !prev;
      setTheme(newValue);
      return newValue;
    });
  };
  return (
    <CustomThemeContext.Provider
      value={{ theme: isDark ? themeDark : themeLight, handleTheme }}
    >
      {children}
    </CustomThemeContext.Provider>
  );
};

CustomThemeProvider.propTypes = {
  children: PropTypes.node,
};
