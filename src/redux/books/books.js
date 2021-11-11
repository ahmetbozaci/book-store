const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const LOAD_BOOKS = 'bookStore/books/LOAD_BOOKS';

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
    case LOAD_BOOKS:
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

export const loadBooks = (apiState) => ({
  type: LOAD_BOOKS,
  payload: apiState,
});

export default reducer;
