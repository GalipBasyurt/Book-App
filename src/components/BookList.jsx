import axios from "axios";
import React, { useEffect, useState } from "react";
import { BOOK_LIST_URL } from "../Api";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router";
const BookList = () => {
  const [books, setBooks] = useState([]);

  const navigate = useNavigate();

  const { favorites, addToFavorites, removeFromFavotites } = useAppContext();
  console.log(favorites);

  const checkFavorite = (id) => {
    const boolen = favorites.some((book) => book.id === id);
    return boolen;
  };

  useEffect(() => {
    axios
      .get(BOOK_LIST_URL)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="book-list">
      {books.map((book) => (
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
      ))}
    </div>
  );
};

export default BookList;
