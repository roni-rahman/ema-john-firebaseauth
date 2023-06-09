import React from "react";
import "./Singup.css";

const Singup = () => {
  return (
    <div>
      <div className="form-container">
        <h2 className="form-title">Sign up</h2>
        <form>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Confirm Password</label>
            <input type="password" name="confirm" id="" required />
          </div>
          <input className="btn-submit" type="button" value="Sign up" />
        </form>
      </div>
    </div>
  );
};

export default Singup;
