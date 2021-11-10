/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { addBook } from '../../redux/books/books';
import { getBooksFromApi, addBookToApi, deleteBookFromApi } from '../API/API';

const BookForm = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ title: '', author: '' });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  useEffect(async () => {
    const data = await getBooksFromApi();
    console.log(data);
    // addBookToApi();
    // deleteBookFromApi('31231');
  });

  const addBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title: state.title,
      author: state.author,
    };
    dispatch(addBook(newBook));
    setState({ title: '', author: '' });
  };

  return (
    <div>
      <h3>ADD NEW BOOK</h3>
      <form action="">
        <input type="text" placeholder="Book title" onChange={handleChange} value={state.title} name="title" />
        <input type="text" placeholder="Book author" onChange={handleChange} value={state.author} name="author" />
        <select>
          <option value="action">Action</option>
          <option value="action">Science Fiction</option>
        </select>
        <button onClick={addBookToStore} type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default BookForm;
