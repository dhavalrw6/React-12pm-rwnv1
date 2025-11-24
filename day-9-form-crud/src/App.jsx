import React, { useState } from 'react'

function App() {
  const [user,setUser] = useState({});
  const [list,setList] = useState([]);
  const [editId,setEditId] = useState(null);
  const handleChange = (e)=>{
    const {name,value} = e.target;
    setUser({...user,[name]:value});
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(editId == null){
      setList([...list,{...user,id:Date.now()}]);
    }else{
      let data = list.map((val)=>{
        if(val.id == editId){
          return {...val,...user};
        }
        return val;
      })
      setList(data);
      setEditId(null);
    }
    setUser({});
  }

  const handleDelete = (id)=>{
    let data = list.filter(val => val.id != id);
    setList(data);
  }

  const handleEdit = (id)=>{
    let editData = list.find(val => val.id == id);
    setUser(editData);
    setEditId(id);
  }

  return (
    <>
      <form action="" method="post" onSubmit={handleSubmit} >
        <div>
          <label htmlFor="username">User Name</label>
          <input 
            type="text" 
            id='username'  
            onChange={handleChange} 
            name='username' 
            value={user.username || ''} 
          />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="text" 
            id='email' 
            onChange={handleChange} 
            name='email' 
            value={user.email || ''} 
          />
        </div> <br />
          <button type='submit' >Add User Data.</button>
      </form> 

      <br /><br />

      <table style={{"width":"50%"}} border={"2px"}>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody style={{"textAlign":"center"}}>
            {
              list.length >0 ? 
                list.map((value,index)=>(
                  <tr key={value.id}>
                    <td>{index+1}</td>
                    <td>{value.username}</td>
                    <td>{value.email}</td>
                    <td>
                      <button onClick={()=> handleDelete(value.id)}>Delete</button>
                      <button onClick={()=> handleEdit(value.id)}>Edit</button>
                    </td>
                  </tr>
                ))
              : 
              <tr>
                <td colSpan={4}><strong>Data Not Found</strong></td>
              </tr>
            }
        </tbody>
      </table>

    </>
  )
}

export default App
