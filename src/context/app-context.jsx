import React, { useState } from "react";

const appContext = React.createContext(null);
const ContextProvider = appContext.Provider;

export const useAppContext = () => {
  const context = React.useContext(appContext);
  return context;
};

export const AppContextProvider = ({ children }) => {
  const [allTips, setAllTips] = useState([]);
  const [filter, setFilter] = useState(null);

  const createTip = (tip) => {
    setAllTips((pTips) => [...pTips, tip]);
  };

  const filterTip = (query) => {
    if (query) {
      setFilter(query);
    } else {
      setFilter(null);
    }
  };

  const tips = filter
    ? allTips.filter((tip) => tip.titulo.includes(filter))
    : allTips;

  const sortByCategory = () => {
    const categories = Array.from(new Set(allTips.map((tip) => tip.categoria)));
    return categories.map((catName) => {
      const count = allTips.filter((tip) => tip.categoria == catName).length;
      return { title: catName, count: count };
    });
  };

  const categories = sortByCategory();

  return (
    <ContextProvider value={{ createTip, filterTip, tips, categories }}>
      {children}
    </ContextProvider>
  );
};
