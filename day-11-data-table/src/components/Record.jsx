import React from 'react'

function Record({list}) {
  return (
    <div className='row justify-content-center'>
    <div className='col-md-8'>
        <table className="table table-bordered table-striped table-dark table-hover caption-top">
            <caption>
                <h2>User Record</h2>
            </caption>
            <thead>
                <tr>
                    <td>sr. no</td>
                    <td>name</td>
                    <td>email</td>
                    <td>action</td>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((val,idx)=>{
                        const {id,name,email} = val;
                        return (
                            <tr key={id}>
                                <td>{idx + 1}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>
                                    <button className='btn btn-danger'>Delete</button>
                                    {" "}
                                    <button className='btn btn-warning'>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default Record
