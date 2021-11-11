import { deleteBook, postBook } from '../API';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const UPDATE = 'bookStore/books/updateBooks';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      const newState = JSON.parse(JSON.stringify(state));
      newState[action.payload.id] = [action.payload];
      return newState;
    }
    case REMOVE_BOOK: {
      const { [action.payload.id]: r, ...newState } = state;
      return newState;
    }
    case UPDATE:
      return action.payload;
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

const loadBooks = (apiState) => ({
  type: UPDATE,
  payload: apiState,
});

export const getBooks = () => async (dispatch) => {
  const response = await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/naN2smxjCVu4fr6NtvX5/books',
  );
  const data = await response.json();
  dispatch(loadBooks(data));
};

export default reducer;
