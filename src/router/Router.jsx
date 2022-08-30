import { Produtos } from "@pages";
import { Navigate, Route, Routes } from "react-router";

export const Router = () => {
  return (
    <Routes>
      <Route path="/produtos" element={<Produtos />} />
      <Route path="*" element={<Navigate to={"/produtos"} replace={true} />} />
    </Routes>
  );
};
