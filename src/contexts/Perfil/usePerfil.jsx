import { useContext } from "react";
import { PerfilContext } from "./PerfilContext";

export const usePerfil = () => {
  const context = useContext(PerfilContext);

  return context;
};
