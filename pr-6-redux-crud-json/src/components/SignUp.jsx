import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, updateUser } from "../features/users/userSlice";

const SignUp = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const { editData } = useSelector((state) => state.users);

  useEffect(() => {
    setUser(editData);
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(user));
    setUser({});
  };
  

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form action="" method="post" onSubmit={handleSubmit}>
            <div className="mb-3">
              <h2>Sign Up</h2>
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="form-control"
                value={user.username || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-capitalize">
                email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                value={user.email || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-capitalize">
                password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                value={user.password || ""}
                onChange={handleChange}
              />
            </div>
            {editData.id ? (
              <button type="button" className="btn btn-primary" onClick={()=> dispatch(updateUser(user))}>
                Update
              </button>
            ) : (
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
