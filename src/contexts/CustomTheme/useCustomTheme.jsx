import { useContext } from "react";
import { CustomThemeContext } from "./CustomThemeContext";

export const useCustomTheme = () => {
  const context = useContext(CustomThemeContext);

  return context;
};
