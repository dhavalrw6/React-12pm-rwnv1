import React, { useState } from "react";

function App() {
  const [user, setUser] = useState({});
  const [hobby, setHobby] = useState([]);
  const [list, setList] = useState([]);
  const [editId,setEditId] = useState(null);

  const cities = ["New York", "London", "Tokyo", "Paris", "Sydney"];
  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name == "hobby") {
      let newHobby = hobby;
      if (newHobby.includes(value)) {
        newHobby = newHobby.filter((val) => val != value);
      } else {
        newHobby.push(value);
      }
      value = newHobby;
      setHobby(newHobby);
    }

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(editId){
      let newList = list;
      newList = newList.map((value)=>{

        if(value.id == editId){
          return {...value,...user}
        }

        return value;
      })
      setList(newList);
      setEditId(null);
    }else{
      setList([...list, { ...user, id: Date.now() }]);
    }
      


    setUser({});
    setHobby([]);
  };

  const handleDelete = (id)=>{
    let newList = list.filter((value)=> value.id != id);
    setList(newList); 
  }

  const handleEdit=(id)=>{
    let data = list.find(value => value.id == id);
    setUser(data);
    setHobby(data.hobby);
    setEditId(id);
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form action="" method="post" onSubmit={handleSubmit}>
            <h2>Ragistration Form</h2>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                name="username"
                id="username"
                value={user.username || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                value={user.email || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                value={user.password || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label me-3">
                Gender
              </label>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  name="gender"
                  value="male"
                  id="male"
                  checked={user.gender == "male" ? true : false}
                  onChange={handleChange}
                />
                <label htmlFor="male" className="form-check-label">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  name="gender"
                  value="female"
                  id="female"
                  checked={user.gender == "female" ? true : false}
                  onChange={handleChange}
                />
                <label htmlFor="female" className="form-check-label">
                  female
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="hobby" className="form-label me-3">
                Hobby
              </label>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="hobby"
                  value="reading"
                  id="reading"
                  checked={hobby.includes("reading")}
                  onChange={handleChange}
                />
                <label htmlFor="reading" className="form-check-label">
                  Reading
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="hobby"
                  value="writing"
                  id="writing"
                  checked={hobby.includes("writing")}
                  onChange={handleChange}
                />
                <label htmlFor="writing" className="form-check-label">
                  Writing
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="hobby"
                  value="coding"
                  id="coding"
                  checked={hobby.includes("coding")}
                  onChange={handleChange}
                />
                <label htmlFor="coding" className="form-check-label">
                  Coding
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <select
                class="form-select"
                name="city"
                aria-label="Default select example"
                onChange={handleChange}
              >
                <option selected disabled={user.city ? true : false}>
                  --select-city--
                </option>
                {cities.map((city) => (
                  <option value={city} selected={user.city == city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <textarea
                name="address"
                id="address"
                rows={3}
                className="form-control"
                onChange={handleChange}
                value={user.address || ""}
              >
                
              </textarea>
            </div>
            <button type="submit" className="btn btn-primary me-3">
              Submit
            </button>
            <button type="reset" className="btn btn-primary">
              Reset
            </button>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="table-responsive">
            <table className="table table-dark table-bordered table-striped table-hover caption-top">
              <caption>
                <h2>User Data</h2>
              </caption>
              <thead>
                <tr>
                  <th>Sr. No</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Gender</th>
                  <th>Hobby</th>
                  <th>City</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {list.length > 0 ? (
                  list.map((value, index) => {
                    const {username,email,password,gender,hobby,city,address,id} = value;
                    return (
                      <tr key={id}>
                        <td>{index + 1}</td>
                        <td>{username}</td>
                        <td>{email}</td>
                        <td>{password}</td>
                        <td>{gender}</td>
                        <td>{hobby.join(", ")}</td>
                        <td>{city}</td>
                        <td>{address}</td>
                        <td>
                          <button onClick={()=> handleDelete(id)} className="btn btn-outline-danger" >Delete</button>
                          {" "}
                          <button onClick={()=> handleEdit(id)} className="btn btn-outline-warning" >Edit</button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={9} className="text-center">
                      Data Not Found.
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
