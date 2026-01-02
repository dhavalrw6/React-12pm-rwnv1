import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import UserAuth from '../hoc/UserAuth';

const Home = () => {
  const {user,setIsLogin} = useContext(UserContext);
  console.log(user);
  
  return (
    <div className='vh-100 bg-secondary-subtle d-flex justify-content-center align-items-center flex-column'>
      <h2 className='text-center'>Welcome to Home Page</h2>
      <h2 className='text-center'>{user.name}</h2>
      <button className='btn btn-outline-dark' onClick={()=> setIsLogin(false)} >Logout</button>
    </div>
  )
}

export default UserAuth(Home)
