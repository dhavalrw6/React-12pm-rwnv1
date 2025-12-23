import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import { Route, Routes, useNavigate } from 'react-router'
import Home from './pages/Home'
import AddBook from './pages/AddBook'
import ViewBooks from './pages/ViewBooks'

function App() {
  const [book,setBook] = useState({});
  const [list,setList] = useState([]);
  const [borrow,setBorrow] = useState([]);
  const navigator= useNavigate();

  useEffect(()=>{
    let oldList = JSON.parse(localStorage.getItem('books')) || [];
    let oldborrow = JSON.parse(localStorage.getItem('borrow')) || [];
    setList(oldList);
    setBorrow(oldborrow);
  },[])

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setBook({...book,[name]:value});
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    let newList = list;
    if(book.id){
      newList = newList.map((val)=>{
        if(book.id == val.id){
          return book;
        }
        return val;
      })  
      navigator('/view-books');
    }else{
      newList = [...list,{...book,id:Date.now()}]
    }

    setList(newList);
    localStorage.setItem('books',JSON.stringify(newList));
    setBook({});
  }

  const handleDelete=(id)=>{
    const newList = list.filter(val => val.id != id);
    setList(newList);
    localStorage.setItem('books',JSON.stringify(newList));
  }

  const handleEdit=(id)=>{
    const data = list.find(val => val.id == id);
    setBook(data);
    navigator('/add-book');
  }

  const handleBorrowedBook=(id)=>{
    let data = list.find(value => value.id == id);
    if(data.count > 0){
      data.count--;
    }
    let newList = list.map((value)=>{
      if(value.id == id) return data;
      return value;
    })
    let newBorrow = [...borrow,data];
    setBorrow(newBorrow);
    setList(newList);
    localStorage.setItem('borrow',JSON.stringify(newBorrow));
    localStorage.setItem('books',JSON.stringify(newList));
  }
  

  return (
    <>
     <Header/>
     <Routes>
      <Route index element={<Home list={list} handleBorrowedBook={handleBorrowedBook} />}/>
      <Route path='/add-book' element={
          <AddBook 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            book={book}
          />
        } />
      <Route path='/view-books' element={
          <ViewBooks
            list={list}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        } />
     </Routes>
    </>
  )
}

export default App
