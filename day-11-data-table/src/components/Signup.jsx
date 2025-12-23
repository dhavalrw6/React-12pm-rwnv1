import React from "react";

function Signup({user,handleChange,handleSubmit}) {
  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <form method="post" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="name"
              value={user.name || ''}
              onChange={handleChange}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={user.email || ''}
              onChange={handleChange}
              aria-describedby="emailHelp"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
