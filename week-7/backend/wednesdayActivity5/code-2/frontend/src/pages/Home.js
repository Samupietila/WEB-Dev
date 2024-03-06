// components
import BookDetails from "../components/BookDetails";
import BookForm from "../components/BookForm";
import { useEffect, useState } from "react";

const Home = () => {
  const [booksData, setBooksData] = useState([]);
  const apiUrl = "http://localhost:4000/api/books/";
  const user = localStorage.getItem("email");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        const data = await response.json();
        setBooksData(data);
        console.log(booksData);
      } catch (error) {
        console.error("error: ", error);
      }
    };
    fetchData();
  }, []);
  const handleDeleteItem = async (itemId) => {
    try {
      const response = await fetch(apiUrl + itemId, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const data = await response.json();
    } catch (error) {
      console.error(error);
    }
    const updatedItems = booksData.filter((item) => {
      return item._id !== itemId;
    });
    setBooksData(updatedItems);
  };
  return (
    <div className="home">
      <div className="books">
        {booksData.map((book) => (
          <BookDetails
            key={book._id}
            {...book}
            handleDelete={handleDeleteItem}
          />
        ))}
      </div>
      <BookForm setBooksData={setBooksData} />
    </div>
  );
};

export default Home;
