import { Produtos, ProdutosSelecionados } from "@pages";
import { Navigate, Route, Routes } from "react-router";

export const Router = () => {
  return (
    <Routes>
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/produtos-selecionados" element={<ProdutosSelecionados />} />
      <Route path="*" element={<Navigate to={"/produtos"} replace={true} />} />
    </Routes>
  );
};
