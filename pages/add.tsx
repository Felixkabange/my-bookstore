import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import BookForm from '../components/BookForm'; 
import { useRouter } from 'next/router';

const AddBook: React.FC = () => {
  const router = useRouter();

  const addBook = (book: { title: string; author: string; price: number }) => {
    console.log('Book to add:', book);
    router.push('/');
  };

  return (
    <>
      <Head>
        <title>Add Book - Bookstore</title>
        <meta name="description" content="Add a new book to the bookstore collection." />
        <meta property="og:title" content="Add Book - Bookstore" />
        <meta property="og:description" content="Add a new book to the bookstore collection." />
        <meta property="og:url" content="http://mydomain.com/add" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="http://mydomain.com/add" />
      </Head>
      <div className="p-6 md:p-10">
        <h1 className="text-3xl font-bold mb-6">Add a New Book</h1>
        <BookForm addBook={addBook} />
        <div className="mt-4">
          <Link href="/">
            <a className="text-blue-500 hover:text-blue-700">Back to Book List</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AddBook;





