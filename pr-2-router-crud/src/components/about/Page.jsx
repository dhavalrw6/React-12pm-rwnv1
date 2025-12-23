import React from 'react'

function Page(props) {
  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        <div className='col-12'>
          <div className='table-responsive'>
            <table className='table table-bordered table-striped table-dark table-hover caption-top'>
              <caption>
                <h2>Employee Data</h2>
              </caption>
              <thead>
                <tr>
                  <th>sr no</th>
                  <th>name</th>
                  <th>department</th>
                  <th>salary</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {
                  props.list.length > 0 ?
                  props.list.map((value,index)=>{
                    const {ename,department,salary,id} = value;
                    return (
                      <tr key={id}>
                        <td>{index + 1}</td>
                        <td>{ename}</td>
                        <td>{department}</td>
                        <td>{salary}</td>
                        <td>
                          <button type='button' className='btn btn-danger' onClick={()=> props.handleDelete(id)}>Delete</button>
                          <button type='button' className='btn btn-warning' onClick={()=> props.handleEdit(id)}>Edit</button>
                        </td>
                      </tr>
                    )
                  })
                  :
                  <tr>
                    <td colSpan={5} className='text-center fs-3'>Data Not Found</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
