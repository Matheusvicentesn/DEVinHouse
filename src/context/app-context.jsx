import React, { useState } from "react";

const appContext = React.createContext(null);
const ContextProvider = appContext.Provider;

export const useAppContext = () => {
  const context = React.useContext(appContext);
  return context;
};

export const AppContextProvider = ({ children }) => {
  const [allTips, setAllTips] = useState([
    {
      titulo: "Uma dica",
      descricao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, tempore sequi dolorem reprehenderit quaerat accusamus quas excepturi officia natus, reiciendis architecto. Dolorum quaerat veritatis officia delectus suscipit error. Itaque quos ratione placeat deserunt corrupti voluptate dolorum mollitia optio, atque voluptas praesentium inventore asperiores fugiat omnis ab architecto ut laudantium commodi.",
      categoria: "front-end",
      linguagem: "css (flexbox)",
      video: "https://www.youtube.com/watch?v=3elGSZSWTbM",
    },
  ]);
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
