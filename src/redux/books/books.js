/* eslint-disable no-unused-vars */
/** @format */

import { deleteBook, postBook } from '../API';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const ADD_BOOK_TO_API = 'bookStore/books/ADD_BOOK_TO_API';
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case ADD_BOOK_TO_API:
      return 'Success';
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: {
    id,
  },
});

export const addBookToApi = (book) => async (dispatch) => {
  postBook(book);
  dispatch(addBook(book));
};

export const removeBookFromApi = (id) => async (dispatch) => {
  deleteBook(id);
  dispatch(removeBook(id));
};

export const getBooks = () => async(dispatch) => {
  const response = await getBooks();
  dispatch(response);
};

export default reducer;
