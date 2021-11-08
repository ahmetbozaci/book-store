/* eslint-disable no-unused-vars */
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();

  // const onChange = (e) => {
  // const newBook = {
  //   id: uuidv4(),
  //   title: e.target.value,
  //   author: 'author',
  // };
  //   console.log(e.target.value);
  //   return newBook;
  // };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title: e.target.value,
      author: 'author',
    };
    dispatch(addBook(newBook));
  };

  return (
    <div>
      <h3>ADD NEW BOOK</h3>
      <form action="">
        <input type="text" placeholder="Book title" />
        <select>
          <option value="action">Action</option>
          <option value="action">Science Fiction</option>
        </select>
        <button onClick={submitBookToStore} type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default BookForm;
