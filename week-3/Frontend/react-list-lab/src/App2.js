import {recipes} from './components/data';

function App() {
    return (
      <div className="App">
        <h1>Book List</h1>
        <div className="book-list">
          {booksData.map((book) => (
            <Book book={book} />
          ))}
        </div>
      </div>
    );
  }
  
  export default App;