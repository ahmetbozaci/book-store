/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import Buttons from './Buttons';

const BookList = () => {
  const books = useSelector((state) => state.booksReducer);
  Object.entries(books).forEach(([key, value]) => { console.log(`${key}: ${value}`); });

  return (
    <ul>
      {Object.entries(books).map(([key, value]) => (
        <li key={key} id={key}>
          {value[0].title}
          <Buttons />
        </li>
      ))}
    </ul>
  );
};
export default BookList;
