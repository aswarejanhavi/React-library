
import React from 'react';

const BorrowerDetail = ({ borrower }) => (
  <div>
    <h2>Borrower Detail</h2>
    {borrower ? (
      <div>
        <h3>{borrower.name}</h3>
        <p>{borrower.email}</p>
      </div>
    ) : (
      <p>Select a borrower to see the details</p>
    )}
  </div>
);

export default BorrowerDetail;
