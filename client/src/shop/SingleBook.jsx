// import React from 'react'
// import { useLoaderData } from 'react-router-dom'

// const SingleBook = () => {
//     const { _id, bookTitle, imageURL} = useLoaderData();
//   return (
//     <div className='mt-28 px-4 lg:px-24'>
//         <img src={imageURL} alt="" className='h-96' />
//         <h2>{bookTitle}</h2>
//     </div>
//   )
// }

// export default SingleBook



import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'flowbite-react';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/book/${id}`)
      .then(res => res.json())
      .then(data => setBook(data));
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>{book.bookTitle}</h2>
      <div className='grid gap-4 my-12 lg:grid-cols-2 items-start'>
        <div className="">
          <img src={book.imageURL} alt={book.bookTitle} className='h-96 mx-auto' />
          <button className='bg-blue-700 font-semibold text-white py-2 ml-52 rounded w-1/3 mt-4'>
            <a href={book.bookPDFURL} target="_blank" rel="noopener noreferrer">Buy Now</a>
          </button>
        </div>
        <div>
          <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{book.bookTitle}</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 text-lg mt-4">{book.bookDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;



