import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();

  const addBookToStore = (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(newBook));
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  };

  return (
    <div>
      <h3>ADD NEW BOOK</h3>
      <form action="">
        <input type="text" placeholder="Book title" id="title" />
        <input type="text" placeholder="Book author" id="author" />
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
