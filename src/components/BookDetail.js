
import React from 'react';

const BookDetail = ({ book }) => (
  <div>
    <h2>Book Detail</h2>
    {book ? (
      <div>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <p>{book.description}</p>
      </div>
    ) : (
      <p>Select a book to see the details</p>
    )}
  </div>
);

export default BookDetail;
