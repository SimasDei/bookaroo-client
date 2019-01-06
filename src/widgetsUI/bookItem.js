import React from 'react';
import { Link } from 'react-router-dom';

const BookItem = item => {
  return (
    <div className="col s12 m6 l4">
      <div className="card medium hoverable">
        <div className="card-image">
          <img className="responsive-img" src={item.imageUrl} alt="book" />
          <span className="card-title">{item.name}</span>
        </div>

        <div className="card-content">
          <p>
            Author: <strong>{item.author}</strong>
          </p>
          <p>
            Price: <strong>${item.price}</strong>
          </p>
          <p>
            Pages: <strong>{item.pages}</strong>
          </p>
        </div>

        <div className="card-action">
          <Link
            to={`/books/${item._id}`}
            className="book_item truncate"
            title={item.name}
          >
            {item.name}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BookItem;
