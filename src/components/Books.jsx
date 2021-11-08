import BookForm from './BookForm';
import Buttons from './Buttons';

const books = [
  {
    id: 1,
    name: 'The Hunger Games',
    writer: 'Suzanne Collins',
    category: 'Action',
    completed: 'not completed',
  },
  {
    id: 2, name: 'Dune', writer: 'Frank Herbert', category: 'Science Fiction', completed: 'not completed',
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
          {book.completed}
          <Buttons />
        </li>
      ))}
    </ul>
    <BookForm />
  </div>
);

export default Books;
