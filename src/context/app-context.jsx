import React from "react";

const appContext = React.createContext(null);
const ContextProvider = appContext.Provider;

export const useAppContext = () => {
  const context = React.useContext(appContext);
  return context;
};

export const AppContextProvider = ({ children }) => {
  return <ContextProvider value={"conetado!"}>{children}</ContextProvider>;
};
