import { useSelector } from 'react-redux';
import { FaRegCircle } from 'react-icons/fa';
import Buttons from './Buttons';
import '../SCSS/BookList.scss';

const BookList = () => {
  const books = useSelector((state) => state.booksReducer);
  return (
    <div className="book-list">
      {Object.entries(books).map(([key, value]) => (
        <div key={key} id={key} className="book-item">
          <div className="book-details">
            <p className="category">
              Action
            </p>
            <p className="book-title">
              {value.map((item) => item.title)}
            </p>
            <p className="author">Suzanne Collins</p>
            <div className="book-buttons" id={key}><Buttons /></div>
          </div>
          <div className="d-flex">
            <p className="icon">{FaRegCircle}</p>
            <div className="percentage-section">
              <p className="percentage">65%</p>
              <p className="completed-text">Completed</p>
            </div>
          </div>
          <div>
            <p className="current-chapter-text">Current Chapter</p>
            <p className="chapter">Chapter 17</p>
            <button type="button" className="update-button">Update Progress</button>
          </div>
        </div>
      ))}

    </div>
  );
};
export default BookList;
