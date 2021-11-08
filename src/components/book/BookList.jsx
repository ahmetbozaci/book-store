/* eslint-disable no-unused-vars */
import Buttons from './Buttons';
import store from '../../redux/configureStore';

console.log(store.getState().booksReducer);
const BookList = () => {
  const books = store.getState().booksReducer;
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
