const THEME = "THEME";

export const getTheme = () => {
  return localStorage.getItem(THEME);
};

export const setTheme = (theme) => {
  return localStorage.setItem(THEME, theme);
};

export const clearTheme = () => {
  return localStorage.clear(THEME);
};
