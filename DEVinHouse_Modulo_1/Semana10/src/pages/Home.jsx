import React from "react";
import MainContent from "../components/MainContent";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="root-container">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Home;
