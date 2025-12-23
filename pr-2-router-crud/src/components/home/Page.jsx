import React from "react";

function Page({handleChange,handleSubmit,employee,editId}) {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <form action="" method="post" onSubmit={handleSubmit}>
            <h2>Add Employee Data</h2>
            <div className="mb-3">
              <label htmlFor="ename" className="form-label">
                Employee Name
              </label>
              <input
                type="text"
                name="ename"
                id="ename"
                value={employee.ename || ''}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="department" className="form-label">
                Department
              </label>
              <input 
                type="text" 
                name="department" 
                id="department"
                value={employee.department || ''}
                onChange={handleChange}
                className="form-control" 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="salary" className="form-label">
                Salary
              </label>
              <input 
                type="number" 
                name="salary" 
                id="salary"
                value={employee.salary || ''}
                onChange={handleChange}
                className="form-control" 
              />
            </div>
            <button 
                className="btn btn-primary"
                type="submit"
            >
                {editId ? "Update" : "Submit" }
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
