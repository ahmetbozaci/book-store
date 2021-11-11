import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BookForm from './BookForm';
import BookList from './BookList';
import { getBooks } from '../../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div>
      <BookList />
      <BookForm />
    </div>
  );
};

export default Books;
