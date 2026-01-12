import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, editUser, getAllUsers } from "../features/users/userSlice";

const ViewUsers = () => {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllUsers());
  },[])

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="table-responsive mt-5">
            <table className="table table-bordered table-striped caption-top">
              <caption>
                <h3>User Data</h3>
              </caption>
              <thead>
                <tr>
                  <th>Sr. No</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user, index) => {
                  const { id, username, password, email } = user;
                  return (
                    <tr key={id}>
                      <td>{index + 1}</td>
                      <td>{username}</td>
                      <td>{email}</td>
                      <td>{password}</td>
                      <td>
                        <button className="btn btn-danger me-3" onClick={()=> dispatch(deleteUser(id))}>Delete</button>
                        <button className="btn btn-danger" onClick={()=> dispatch(editUser(id))}>Edit</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUsers;
