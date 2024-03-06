import { useBook } from "../hooks/useBook";
import { useField } from "../hooks/useField";

const BookForm = ({ setGoalsData }) => {
  const apiUrl = "http://localhost:400/api/books";
  const titleInput = useField("text");
  const title = titleInput.value;
  const authorInput = useField("text");
  const author = authorInput.value;
  const genreInput = useField("text");
  const genre = genreInput.value;
  const user = localStorage.getItem("email");
  const { handleBooks } = useBook({
    title,
    author,
    genre,
  });
  return (
    <form className="create" onSubmit={handleBooks}>
      <h3>Add a New Book</h3>

      <label>Title:</label>
      <input {...titleInput} />
      <label>Author:</label>
      <input {...authorInput} />
      <label>Genre:</label>
      <input {...genreInput} />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
