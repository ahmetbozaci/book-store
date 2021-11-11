/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { addBook, addBookToApi } from '../../redux/books/books';

import { getBooks, postBook, deleteBook } from '../../redux/API';

const BookForm = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ title: '', category: 'no category' });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const addBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title: state.title,
      category: state.category,
    };
    dispatch(addBookToApi(newBook));
    setState({ title: '', category: '' });

    // const test = async () => {
    //   const data = await getBooks();
    //   console.log(data);
    // };
    // test();
  };

  return (
    <div>
      <h3>ADD NEW BOOK</h3>
      <form action="">
        <input type="text" placeholder="Book title" onChange={handleChange} value={state.title} name="title" />
        <select onChange={handleChange} name="category">
          <option value={state.category}>Action</option>
          <option value={state.category}>Science Fiction</option>
          <option value={state.category}>Horror</option>
          <option value={state.category}>Classics</option>
        </select>
        <button onClick={addBookToStore} type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default BookForm;
