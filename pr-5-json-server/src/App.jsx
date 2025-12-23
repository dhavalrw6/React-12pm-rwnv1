import React, { useEffect, useState } from "react";
import SignUp from "./components/SignUp";

function App() {
  const [user, setUser] = useState({});
  const [list,setList] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddUser();
    setUser({});
  };

  const handleAddUser = async()=>{
   try {
      await fetch('http://localhost:3000/users',{
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body : JSON.stringify({...user,id:Date.now()})
      })
      console.log("data add successfully.");
      handleGetAllUsers();
   } catch (error) {
      console.log(error.message);      
   }
  }

  const handleGetAllUsers = async()=>{
    try {
      let res = await fetch('http://localhost:3000/users');
      let result = await res.json();
      console.log(result);      
      setList(result);
    } catch (error) {
      console.log(error.message);      
    }
  }

  return (
    <div>
      <SignUp
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        user={user}
      />
    </div>
  );
}

export default App;
