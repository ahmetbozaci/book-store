import { addBook, removeBook, loadBooks } from './books/books';

//! For get app id
// const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
// useEffect(() => {
//   const fetchData = async () => {
//     const response = await fetch(URL, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//
//     });
//     const data = await response.text();
//     console.log(data);
//   };
//   fetchData();
// }, []);

const BOOK_STORE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/naN2smxjCVu4fr6NtvX5/books';
//! Get data
// const getBooks = async () => {
//   const response = await fetch(BOOK_STORE_URL);
//   const data = await response.json();
//   return data;
// };

export const getBooks = () => async (dispatch) => {
  const response = await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/naN2smxjCVu4fr6NtvX5/books',
  );
  const data = await response.json();
  dispatch(loadBooks(data));
};

//! Post data
const postBook = async (book) => {
  const newBook = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  };
  const response = await fetch(BOOK_STORE_URL, newBook);
  return response;
};

export const addBookToApi = (book) => async (dispatch) => {
  postBook(book);
  dispatch(addBook(book));
};

//! Delete data
const deleteBook = async (id) => {
  const URL = `${BOOK_STORE_URL}/${id}`;
  return fetch(URL, { method: 'DELETE' });
};

export const removeBookFromApi = (id) => async (dispatch) => {
  deleteBook(id);
  dispatch(removeBook(id));
};
