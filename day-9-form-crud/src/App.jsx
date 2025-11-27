import React, { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState({});
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [error,setError] = useState({});
  const [mount,setMount] = useState(false);

  useEffect(()=>{
    let oldList = JSON.parse(localStorage.getItem('list')) || []; 
    setList(oldList);
    setMount(true);
  },[])

  useEffect(()=>{
    if(mount){
      localStorage.setItem('list',JSON.stringify(list));
    }
  },[list]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = [];
    if(validation()) {return};

    if (editId == null) {
      data = [...list, { ...user, id: Date.now()}]
    } else {
      data = list.map((val) => {
        if (val.id == editId) {
          return { ...val, ...user };
        }
        return val;
      });
      setEditId(null);
    }
    
    setList(data);
    
    setUser({});
  };

  const handleDelete = (id) => {
    let data = list.filter((val) => val.id != id);
    setList(data);
  };

  const handleEdit = (id) => {
    let editData = list.find((val) => val.id == id);
    setUser(editData);
    setEditId(id);
  };

  const validation=()=>{
    let error = {};

    if(!user.username) error.username = `Username is Required.`;
    if(!user.email) error.email = `Email is Required.`;
    setError(error);
    return Object.keys(error).length != 0;
  }

  
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form action="" method="post" onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            <div className="mb-3">
              <label className="form-label" htmlFor="username">User Name</label>
              <input
                className="form-control"
                type="text"
                id="username"
                onChange={handleChange}
                name="username"
                value={user.username || ""}
              />
              {error.username ? <span className="text-danger">{error.username}</span> : ''}
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                className="form-control"
                type="text"
                id="email"
                onChange={handleChange}
                name="email"
                value={user.email || ""}
              />
              {error.email ? <span className="text-danger">{error.email}</span> : ''}
            </div>
            <button type="submit" className="btn btn-primary">Add User Data.</button>
          </form>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="table-responsive">
            <table className="table table-bordered caption-top">
              <caption>
                <h2>User Data</h2>
              </caption>
              <thead>
                <tr>
                  <th>Sr No</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                {list.length > 0 ? (
                  list.map((value, index) => (
                    <tr key={value.id}>
                      <td>{index + 1}</td>
                      <td>{value.username}</td>
                      <td>{value.email}</td>
                      <td>
                        <button className="btn btn-outline-danger me-2" onClick={() => handleDelete(value.id)}>
                          Delete
                        </button>
                        <button className="btn btn-outline-warning" onClick={() => handleEdit(value.id)}>
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4}>
                      <strong>Data Not Found</strong>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
