import React from "react";

function AddBook({handleChange,handleSubmit,book}) {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <form method="post" onSubmit={handleSubmit}>
            <h2>Add Books</h2>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Book Image
              </label>
              <input
                type="url"
                className="form-control"
                id="image"
                name="image"
                value={book.image || ''}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Book Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={book.title || ''}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="count" className="form-label">
                Book count
              </label>
              <input
                type="number"
                className="form-control"
                id="count"
                name="count"
                min={1}
                max={20}
                value={book.count || ''}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="author" className="form-label">
                Book Author
              </label>
              <input
                type="text"
                className="form-control"
                id="author"
                name="author"
                value={book.author || ''}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Book Category
              </label>
              <input
                type="text"
                className="form-control"
                id="category"
                name="category"
                value={book.category || ''}
                onChange={handleChange}
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
}

export default AddBook;
