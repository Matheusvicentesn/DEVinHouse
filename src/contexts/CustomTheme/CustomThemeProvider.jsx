import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import {
  getTheme as getThemeLocalStorage,
  setTheme as setThemeLocalStorage,
} from "../../utils/localStorage";
import { themeDark, themeLight } from "../../themes";

import { CustomThemeContext } from "./CustomThemeContext";

export const CustomThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const themeDefault = getThemeLocalStorage();
    if (themeDefault) {
      setTheme(themeDefault);
    }
  }, []);

  const handleTheme = () => {
    setTheme((prev) => {
      const newValue = prev === "dark" ? "light" : "dark";
      setThemeLocalStorage(newValue);
      return newValue;
    });
  };

  const customTheme = theme === "dark" ? themeDark : themeLight;

  return (
    <CustomThemeContext.Provider value={{ theme: customTheme, handleTheme }}>
      {children}
    </CustomThemeContext.Provider>
  );
};

CustomThemeProvider.propTypes = {
  children: PropTypes.node,
};
