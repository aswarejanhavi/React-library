
import React, { useState } from 'react';

const BorrowReturnBook = ({ onBorrow, onReturn, borrowers, books }) => {
  const [selectedBorrower, setSelectedBorrower] = useState('');
  const [selectedBook, setSelectedBook] = useState('');

  const handleBorrow = () => {
    onBorrow(selectedBorrower, selectedBook);
  };

  const handleReturn = () => {
    onReturn(selectedBorrower, selectedBook);
  };

  return (
    <div>
      <h2>Borrow/Return Book</h2>
      <div>
        <label>Borrower</label>
        <select value={selectedBorrower} onChange={(e) => setSelectedBorrower(e.target.value)}>
          <option value="">Select Borrower</option>
          {borrowers.map((borrower) => (
            <option key={borrower.id} value={borrower.id}>
              {borrower.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Book</label>
        <select value={selectedBook} onChange={(e) => setSelectedBook(e.target.value)}>
          <option value="">Select Book</option>
          {books.map((book) => (
            <option key={book.id} value={book.id}>
              {book.title}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleBorrow}>Borrow</button>
      <button onClick={handleReturn}>Return</button>
    </div>
  );
};

export default BorrowReturnBook;
