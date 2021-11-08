import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const Buttons = () => {
  const dispatch = useDispatch();
  const remove = (e) => {
    dispatch(removeBook(e.target.parentNode.id));
  };
  return (
    <>
      <button type="button">Comments</button>
      <button type="button" onClick={remove}>Remove</button>
      <button type="button">Edit</button>
    </>
  );
};

export default Buttons;
