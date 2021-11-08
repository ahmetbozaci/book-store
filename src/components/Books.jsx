import BookForm from './BookForm';
import Buttons from './Buttons';

const books = [
  {
    id: 1, name: 'The Hunger Games', writer: 'Suzanne Collins', category: 'Action',
  },
  {
    id: 2, name: 'Dune', writer: 'Frank Herbert', category: 'Science Fiction',
  },
];
const Books = () => (
  <div>
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {book.category}
          -
          {book.name}
          -
          {book.writer}
          -
          <Buttons />
        </li>
      ))}
    </ul>
    <BookForm />
  </div>
);

export default Books;
