import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router";
import Home from "./components/home/page";
import About from "./components/about/Page";
import Header from "./components/header";
import Login from "./components/login/Page"

function App() {
  const [employee, setEmployee] = useState({});
  const [list, setList] = useState([]);
  const [editId,setEditId] = useState(null);
  const navigetor = useNavigate();
  const [isAuth,setIsAuth] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(editId){
      let newList = list;
      newList = newList.map((value)=>{
          if(value.id == editId)
          {
            return {...value,...employee};
          }
          return value;
      })

      setList(newList);
      setEditId(null);
      navigetor('/about');
    }else{
      setList([...list, { ...employee, id: Date.now() }]);
    }

    setEmployee({});
  };

  const handleDelete = (id)=>{
    let newList = list;
    newList = newList.filter(value => value.id != id);
    setList(newList);
  }

  const handleEdit = (id)=>{
    let data = list.find(value => value.id == id);
    setEmployee(data);
    setEditId(id);
    navigetor('/');
  }

  if(isAuth) {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={
          <Home 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            employee={employee} 
            editId = {editId}
          />
          } />
        <Route path="/about" element={
          <About 
            list={list}
            handleDelete={handleDelete}
            handleEdit={handleEdit} 
          />
          } />
      </Routes>
    </>
  );
}

  else{
  return (
    <>
      <Login setIsAuth={setIsAuth} />
    </>
  );
}
}

export default App;
