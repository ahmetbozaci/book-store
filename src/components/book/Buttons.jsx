import { useDispatch } from 'react-redux';
import { removeBookFromApi } from '../../redux/API';

const Buttons = () => {
  const dispatch = useDispatch();
  const remove = (e) => {
    dispatch(removeBookFromApi(e.target.parentNode.id));
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
