import React, { useEffect, useState } from "react";

const ViewBooks = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        let res = await fetch("http://localhost:3000/book", {
          method: "GET",
        });
        let result = await res.json();
        setList(result);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <div className="container">
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-dark table-hover caption-top">
          <caption>
            <h2>View Books Data</h2>
          </caption>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Image</th>
              <th>Book Name</th>
              <th>Book Author</th>
              <th>Book Count</th>
              <th>Book Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.length >= 0 ? (
              list.map((value, index) => {
                const { title, author, count, category, image, id } = value;

                return (
                  <tr key={id}>
                    <td>{index + 1}</td>
                    <td>
                      <img src={image} alt={title} style={{ width: "50px" , height:'50px', objectFit:'cover'}} />
                    </td>
                    <td>{title}</td>
                    <td>{author}</td>
                    <td>{count}</td>
                    <td>{category}</td>
                    <td>
                        <button type="button" className="btn btn-outline-danger me-3" >Delete</button>
                        <button type="button" className="btn btn-outline-warning" >Edit</button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td className="text-center" colSpan={6}>
                  Data Not Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewBooks;
