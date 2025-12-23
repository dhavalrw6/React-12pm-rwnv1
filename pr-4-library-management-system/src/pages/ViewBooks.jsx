import React from "react";

function ViewBooks({ list, handleDelete, handleEdit }) {
  return (
    <div className="container">
      <div className="table-responsive">
        <table className="table table-dark table-striped table-hover table-bordered caption-top">
          <caption>
            <h2 className="text-uppercase">Books</h2>
          </caption>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Author</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.length > 0 ? (
              list.map((value, index) => {
                const { image, title, author, category, id } = value;
                return (
                  <tr key={id}>
                    <td>{index + 1}</td>
                    <td>
                        <img style={{width:'50px',height:'50px',objectFit:'cover'}} src={image} alt={title} />
                    </td>
                    <td>{title}</td>
                    <td>{author}</td>
                    <td>{category}</td>
                    <td>
                        <button 
                         type="button"
                         className="btn btn-danger me-3"
                         onClick={()=> handleDelete(id)}
                        >
                            Delete
                        </button>
                        <button 
                         type="button"
                         className="btn btn-warning"
                         onClick={()=> handleEdit(id)}
                        >
                            Edit
                        </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td className="text-center fs-4" colSpan={6}>
                  Data Not Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewBooks;
