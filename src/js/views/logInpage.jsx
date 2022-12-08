import React from "react";


export const LogPage = () => {
  return (
      <div className="container-form d-flex justify-content-center">
        <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="label form-label">
            Email address
          </label>
          <input
            type="email"
            placeholder="Type your star wars email"
            className="log-form form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="label form-label">
            Password
          </label>
          <input
            type="password"
            placeholder="Type your star wars password"
            className="log-form form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </form>
      </div>
  );
};
