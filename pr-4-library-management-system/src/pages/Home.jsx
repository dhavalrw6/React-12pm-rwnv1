import React, { useEffect, useState } from "react";

function Home({ list,handleBorrowedBook }) {
  const [newBooks, setNewBooks] = useState([]);

  useEffect(() => {
    setNewBooks([...list.slice(0, 4)]);
  }, [list]);

  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              style={{ height: "80vh" }}
              src="https://static.vecteezy.com/system/resources/thumbnails/044/280/984/small/stack-of-books-on-a-brown-background-concept-for-world-book-day-photo.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              style={{ height: "80vh" }}
              src="https://www.shutterstock.com/image-photo/book-open-pages-close-up-600nw-2562942291.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              style={{ height: "80vh" }}
              src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?cs=srgb&dl=pexels-pixabay-159866.jpg&fm=jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <section className="new-books py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>New Books</h3>
            </div>
          </div>
          <div className="row">
            {newBooks.map((value) => {
              return (
                <div className="col-6 col-lg-3 col-md-4" key={value.id}>
                  <div className="card">
                    <div className="position-relative">
                      <img
                        src={value.image}
                        className="card-img-top"
                        alt="..."
                      />
                      <span className="position-absolute top-0 end-0 m-2 badge rounded-pill bg-success">
                        new
                        <span className="visually-hidden">new books add</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.author}</p>
                      {
                        value.count > 0 ?
                        <button 
                        type="button"  
                        className="btn btn-primary"
                        onClick={()=> handleBorrowedBook(value.id)}
                      >
                        Borrowed Book
                      </button>
                      :
                        <span className="btn btn-secondary">Out of Stock</span>
                      }
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
