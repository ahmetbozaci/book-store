const BookForm = () => (
  <div>
    <h3>ADD NEW BOOK</h3>
    <form action="">
      <input type="text" placeholder="Book title" />
      <select>
        <option value="action">Action</option>
        <option value="action">Science Fiction</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default BookForm;