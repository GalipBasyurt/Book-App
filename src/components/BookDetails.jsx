import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BOOK_DETAIL_URL } from "../Api";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});

  const getBook = async () => {
    const response = await fetch(`${BOOK_DETAIL_URL}/${id}`);
    const data = await response.json();
    setBook(data);
  };
  useEffect(() => {
    getBook();
  }, []);
  return (
    <div className="book-detail">
      <div className="book-detail-wrap">
        <div className="image">
          <img src={book.image_url} alt="" />
        </div>
        <div className="explanation">
          <h3 className="title">{book.title}</h3>
          <div className="author">{book.authors}</div>
          <p className="description">{book.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
