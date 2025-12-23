import React, { useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Header from "./components/Header";
import AddBooks from "./components/AddBooks";
import ViewBooks from "./components/ViewBooks";

const App = () => {
  const [book, setBook] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreate(book);
    setBook({});
  };

  const handleCreate = async (book) => {
    try {
      await fetch("http://localhost:3000/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({...book,id:`${Date.now()}`}),
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/add-books"
          element={
            <AddBooks
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              book={book}
            />
          }
        />
        <Route path="/view-books" element={<ViewBooks />} />
        <Route
          path="*"
          element={
            <h2 className="text-center text-danger mt-5">404 Page not Found</h2>
          }
        />
      </Routes>
    </>
  );
};

export default App;
