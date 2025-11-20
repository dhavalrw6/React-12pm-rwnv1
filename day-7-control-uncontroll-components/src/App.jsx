import React, { useRef, useState } from 'react'

function App() {
  const [user,setUser] = useState({});
  const inputRef = useRef(null);

  const handleSubmit = function(event){
    event.preventDefault();
    const {name,value} = inputRef.current;

    setUser({...user,[name]:value})

  }

  console.log(user);
  

  return (
    <>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <form action="" method="post" onSubmit={handleSubmit}>
              <h2>Sign Up</h2>
              <div className='mb-3'>
                <label htmlFor="username" className='form-label'>Username</label>
                <input type="text" id='username' name='username' ref={inputRef} className='form-control' />
              </div>
              <div className='mb-3'>
                <label htmlFor="email" className='form-label'>Email</label>
                <input type="email" id='email' name='email' ref={inputRef} className='form-control' />
              </div>
              <button className='btn btn-outline-success'>Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
