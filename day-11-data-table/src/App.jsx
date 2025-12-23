import React, { useEffect, useState } from "react";
import Signup from "./components/Signup";
import Record from "./components/Record";

function App() {
  const [user, setUser] = useState({});
  const [list, setList] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  let itemsPerPage = 4;

  // pagination logic
  let indexOfLastItem = currentPage * itemsPerPage;
  let indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let currentItems = list.slice(indexOfFirstItem,indexOfLastItem);
  let totalPages = Math.ceil(list.length / itemsPerPage);


  useEffect(()=>{
    let oldList = JSON.parse(localStorage.getItem('list')) || [];
    setList(oldList);
  },[]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newList = [...list, { ...user, id: Date.now() }];
    setList(newList);
    setUser({});
    localStorage.setItem('list',JSON.stringify(newList));
  };

  const handlePagination = (page)=>{
    setCurrentPage(page);
  }

  return (
    <div className="container">
      <Signup
        user={user}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Record list={currentItems} />
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="d-flex justify-content-center">
            {
              [...Array(totalPages)].map((_,index)=>{
                return (
                  <button onClick={()=> handlePagination(index+1)} className="btn btn-primary mx-1">{index+1}</button>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
