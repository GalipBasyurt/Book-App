import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
  const content = useContext(AppContext);

  if (content === undefined) {
    throw new Error("hata");
  }

  return content;
};

const AppContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (book) => {
    const oldFavorites = [...favorites];
    const nevFavorites = oldFavorites.concat(book);
    setFavorites(nevFavorites);
  };

  const removeFromFavotites = (id) => {
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.filter((book) => book.id !== id);
    setFavorites(newFavorites);
  };

  return (
    <AppContext.Provider
      value={{ favorites, addToFavorites, removeFromFavotites }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
