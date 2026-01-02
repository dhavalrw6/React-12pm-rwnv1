import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import Login from '../components/Login';

const UserAuth = (WrapperComponent) => {
  return function EnhanceComponent(props){
    
    const {isLogin} = useContext(UserContext);

    if(!isLogin) return <Login/>

    return <WrapperComponent {...props}  />
  }
}

export default UserAuth
