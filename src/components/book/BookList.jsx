import { useSelector } from 'react-redux';
import Buttons from './Buttons';

const BookList = () => {
  const books = useSelector((state) => state.booksReducer);
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
