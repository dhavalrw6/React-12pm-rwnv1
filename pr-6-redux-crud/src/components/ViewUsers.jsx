import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, editUser } from '../features/users/userSlice';

const ViewUsers = () => {
    const {users} = useSelector(state => state.users);
    const dispatch = useDispatch();
    
  return (
    <div className='container'>
    <div className='row justify-content-center'>
        <div className='col-md-8'>
            <div className='table-responsive'>

                <table className='table table-bordered table-striped table-hover caption-top'>
                    <caption><h2>View All Users.</h2></caption>
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
                        {
                            users.map((user,index)=>{
                                const {id,username,email,password} = user;
                                return (
                                    <tr key={id}>
                                        <td>{index + 1}</td>
                                        <td>{username}</td>
                                        <td>{email}</td>
                                        <td>{password}</td>
                                        <td>
                                            <button type="button" onClick={()=> dispatch(deleteUser(id))} className="btn btn-outline-danger">Delete</button>
                                            <button type="button" onClick={()=> dispatch(editUser(id))} className="btn btn-outline-warning">Edit</button>
                                        </td>
                                    </tr>
                                )

                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ViewUsers
