import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [user, setUser] = useState({});
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        let result = await axios.get("http://localhost:3000/user");
        console.log(result);
        if (Array.isArray(result.data)) {
          setList(result.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [setList]);

  const getAllUsers = async () => {
    try {
      let result = await axios.get("http://localhost:3000/user");
      console.log(result);
      if (Array.isArray(result.data)) {
        setList(result.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const createUser = async (data) => {
    try {
      await axios.post("http://localhost:3000/user", data);
      alert("User created.");
      getAllUsers();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(user.id){
      updateUser(user);
    }else{
      createUser(user);
    }
    setUser({});
  };

  const updateUser = async(user)=>{
    try {
      await axios.patch(`http://localhost:3000/user/${user.id}`,user);
      alert("User Update Sccessfully");
      getAllUsers();
    } catch (error) {
      alert(error.message);
    }
  }

  const handleDelete = async(id)=>{
    try {
      await axios.delete(`http://localhost:3000/user/${id}`);
      alert("User deleted.");   
      getAllUsers();   
    } catch (error) {
      alert(error.message);      
    }
  }

  const handleEdit = (id)=>{
    let data = list.find(val => val.id == id);
    setUser(data);
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form method="post" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                name="email"
                value={user.email || ""}
                onChange={handleChange}
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                value={user.password || ""}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>sr. no</th>
                <th>email</th>
                <th>password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {list.length > 0 ? (
                list.map((value, index) => {
                  const { email, password, id } = value;
                  return (
                    <tr key={id}>
                      <td>{index + 1}</td>
                      <td>{email}</td>
                      <td>{password}</td>
                      <td>
                        <button className="btn btn-danger me-2" onClick={()=> handleDelete(id)}>Delete</button>
                        <button className="btn btn-warning" onClick={()=> handleEdit(id)} >Edit</button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td className="text-center" colSpan={4}>
                    Data not found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
