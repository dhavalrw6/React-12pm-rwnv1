import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
    const [user,setUser] = useState({});
    const [isLogin,setIsLogin] = useState(false);
  return (
    <UserContext.Provider value={{user,setUser,isLogin,setIsLogin}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
