import React from "react";
import { SummaryCard } from "./SummaryCard";

export const Summary = () => {
  return (
    <div className="summary-container">
      <SummaryCard title="back-end" count={18}/>
      <SummaryCard title="front-end" count={118}/>
    </div>
  );
};
