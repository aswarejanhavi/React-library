
import React from 'react';

const BorrowerList = ({ borrowers }) => (
  <div>
    <h2>Borrower List</h2>
    <ul>
      {borrowers.map((borrower) => (
        <li key={borrower.id}>{borrower.name}</li>
      ))}
    </ul>
  </div>
);

export default BorrowerList;
