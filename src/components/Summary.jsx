import React from "react";
import { useAppContext } from "../context/app-context";
import { SummaryCard } from "./SummaryCard";

export const Summary = () => {
  const { categories } = useAppContext();

  return (
    <div className="summary-container">
      {categories.map((categoria, index) => (
        <SummaryCard
          key={index}
          title={categoria.title}
          count={categoria.count}
        />
      ))}
    </div>
  );
};
