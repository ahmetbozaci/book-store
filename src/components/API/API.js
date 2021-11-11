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
const getBooksFromApi = async () => {
  const response = await fetch(BOOK_STORE_URL);
  const data = await response.json();
  return data;
};

//! Post data
const addBookToApi = async (book) => {
  const newBook = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  };
  const response = await fetch(BOOK_STORE_URL, newBook);
  return response;
};

//! Delete data
const deleteBookFromApi = async (id) => {
  const URL = `${BOOK_STORE_URL}/${id}`;
  fetch(URL, { method: 'DELETE' });
  // setStatus('Delete successful')
};

export { getBooksFromApi, addBookToApi, deleteBookFromApi };
