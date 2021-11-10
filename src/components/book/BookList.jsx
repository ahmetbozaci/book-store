/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Buttons from './Buttons';

const BookList = () => {
  const books = useSelector((state) => state.booksReducer);
  // const [fake, setFake] = useState('');

  //! Get data
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games');
  //     const data = await response.json();
  //     setFake(data);
  //   };
  //   fetchData();
  // }, []);

  //! put data
  // useEffect(() => {
  //   fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games')
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }, []);

  // useEffect(() => {
  //   fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps', {
  //     method: 'POST',
  //   });
  // });

  // console.log(fake);

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id} id={book.id}>
          -
          {book.title}
          -
          {book.author}
          <Buttons />
        </li>
      ))}
    </ul>
  );
};
export default BookList;
