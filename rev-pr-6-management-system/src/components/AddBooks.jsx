import React from "react";

const AddBooks = ({handleSubmit,handleChange,book}) => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <form method="post" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Book Title
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                name="title"
                value={book.title || ''}
                onChange={handleChange}
                aria-describedby="emailHelp"
              /> 
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Book Author
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                name="author"
                value={book.author || ''}
                onChange={handleChange}
                aria-describedby="emailHelp"
              /> 
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Book count
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                name="count"
                value={book.count || ''}
                onChange={handleChange}
                aria-describedby="emailHelp"
              /> 
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Book category
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                name="category"
                value={book.category || ''}
                onChange={handleChange}
                aria-describedby="emailHelp"
              /> 
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Book image
              </label>
              <input
                type="url"
                className="form-control"
                id="exampleInputEmail1"
                name="image"
                value={book.image || ''}
                onChange={handleChange}
                aria-describedby="emailHelp"
              /> 
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBooks;
