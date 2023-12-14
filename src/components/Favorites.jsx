import React from "react";
import { useAppContext } from "../context/appContext";

const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavotites } = useAppContext();
  console.log(favorites);

  const checkFavorite = (id) => {
    const boolen = favorites.some((book) => book.id === id);
    return boolen;
  };
  return (
    <div className="favorites">
      {favorites.length > 0 ? (
        favorites.map((book) => (
          <div key={book.id} className="book-card">
            <div className="image">
              <img
                onClick={() => navigate(`/books/${book.id}`)}
                src={book.image_url}
                alt=""
              />
            </div>
            <div className="subtitle">
              <div className="book-name">{book.title}</div>
              <div className="author">{book.authors}</div>
            </div>
            {checkFavorite(book.id) ? (
              <button onClick={() => removeFromFavotites(book.id)}>
                Remove from Favorites
              </button>
            ) : (
              <button onClick={() => addToFavorites(book)}>
                Add to Favorites
              </button>
            )}
          </div>
        ))
      ) : (
        <h1>You dont have favorite books yet</h1>
      )}
    </div>
  );
};

export default Favorites;
