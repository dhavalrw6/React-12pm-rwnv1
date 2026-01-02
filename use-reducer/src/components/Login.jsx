import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [data,setData] = useState({});
  const {setUser,setIsLogin} = useContext(UserContext);

  const handleChnage = ({target})=>{
    const {name,value} = target;
    setData({...data,[name]:value});    
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    setUser(data);
    setIsLogin(true);
  }

  return (
    <div className="container">
      <div className="row justify-content-center vh-100 align-items-center">
        <div className="col-md-6">
      <form method="post" onSubmit={handleSubmit} >
        <h2>Login</h2>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="name"
            value={data.name || ''}
            onChange={handleChnage}
            aria-describedby="emailHelp"
          />
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
            value={data.password || ''}
            onChange={handleChnage}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
      </div>
    </div>
  );
};

export default Login;
