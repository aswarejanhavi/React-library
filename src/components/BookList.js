// src/components/BookList.js
import React from 'react';

const BookList = ({ books }) => (
  <div>
    <h2>Book List</h2>
    <ul>
      {books.map((book) => (
        <li key={book.id}>{book.title}</li>
      ))}
    </ul>
  </div>
);

export default BookList;
