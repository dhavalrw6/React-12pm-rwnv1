import React, { useState } from 'react'

function Employee() {

    const [emp,setEmp] = useState({});
    const [list,setList] = useState([]);

    const handleInput = (e)=>{
        const {name,value} = e.target;
        setEmp({...emp,[name]:value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        setList([...list,{...emp,id:Date.now()}]);       

    }

    console.log(list);
    

    return (
        <>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <form onSubmit={handleSubmit} method='post'>
                            <h2>Employee Data</h2>
                            <div className="mb-3">
                                <label htmlFor="employeeName" className="form-label">Employee Name</label>
                                <input type="text" onChange={handleInput} name='ename' className="form-control" id="employeeName" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="salary" className="form-label">Employee Salary</label>
                                <input type="number" onChange={handleInput} name='salary' className="form-control" id="salary" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <table className='table table-dark table-bordered table-striped'>
                            <thead>
                                <tr>
                                    <th>Sr. No</th>
                                    <th>E name</th>
                                    <th>E Salary</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    list.length != 0 ?
                                    
                                    list.map((employee,index)=>{
                                        const {ename,salary,id} = employee;
                                        return (
                                            <>
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{ename}</td>
                                                    <td>{salary}</td>
                                                    <td>
                                                        <button className='btn btn-danger'>Delete</button>
                                                    </td>
                                                </tr>
                                            </>
                                        )   
                                    })

                                    : 
                                    <tr>
                                        <td colSpan={4} className='text-center'>Data Not Found</td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Employee
