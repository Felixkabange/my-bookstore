import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
};

const Home: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    // Fetch books from a local state, context, or an API when the component mounts
    const initialBooks = [
      { id: 1, title: 'Book One', author: 'Author One', price: 9.99 },
      // Fetch more books...
    ];
    setBooks(initialBooks);
  }, []);

  return (
    <>
      <Head>
      <title>Bookstore - Home</title>
        <meta name="description" content="Explore our collection of books." />
        <meta property="og:title" content="Bookstore - Home" />
        <meta property="og:description" content="Explore our collection of books." />
        <meta property="og:url" content="http://mydomain.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="http://mydomain.com" />
      </Head>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Book List</h1>
        {books.length > 0 ? (
          <div>
            {books.map(book => (
              <div key={book.id}>
                <h2>{book.title}</h2>
                <p>Author: {book.author}</p>
                <p>Price: ${book.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No books to display</p>
        )}
        <div>
        <Link href="/add" legacyBehavior>
          <a className="text-blue-500">Add a New Book</a>
        </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
