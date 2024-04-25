import React, { useState } from 'react';
import { useRouter } from 'next/router';

type BookFormProps = {
  addBook: (book: { title: string; author: string; price: number }) => void;
};

const BookForm: React.FC<BookFormProps> = ({ addBook }) => {
  const [formData, setFormData] = useState({ title: '', author: '', price: '' });
  const router = useRouter(); // Initialize the router

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addBook({
      title: formData.title,
      author: formData.author,
      price: Number(formData.price),
    });

    // Reset form data
    setFormData({ title: '', author: '', price: '' });

    // Navigate back to the home page
    router.push('/');
  };

  // Return the form JSX code with input fields and button
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          required
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          required
          step="0.01"
        />
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
