import { useState } from "react";
export const useBook = ({ title, author, genre, setBooksData, user }) => {
  const [books, setBooks] = useState([]);
  const apiUrl = "http://localhost:4000/api/books";
  const token = localStorage.getItem("token");
  const handleBooks = async (e) => {
    e.preventDefault();
    console.log(e);
    try {
      const newBook = {
        title,
        author,
        genre,
      };
      const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(newBook),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      const json = await response.json();
      console.log(response, newBook);
      if (response.ok) {
        setBooks((prevBooks) => [json, ...prevBooks]);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return { handleBooks, books };
};
