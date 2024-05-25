
import React, { useState } from 'react';

const BookForm = ({ onSubmit, initialData = {} }) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [author, setAuthor] = useState(initialData.author || '');
  const [description, setDescription] = useState(initialData.description || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, author, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Author</label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <div>
        <label>Description</label>
        <input value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookForm;
