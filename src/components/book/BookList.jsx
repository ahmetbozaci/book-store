import { useSelector } from 'react-redux';
import Buttons from './Buttons';

const BookList = () => {
  const books = useSelector((state) => state.booksReducer);
  return (
    <ul>
      {Object.entries(books).map(([key, value]) => (
        <li key={key} id={key}>
          {value.map((item) => item.title)}
          <Buttons />
        </li>
      ))}
    </ul>
  );
};
export default BookList;
