import React, { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

export default function Login() {
  const { isFetching, error, dispatch } = useContext(AuthContext);
  const email = useRef();
  const password = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">NKCsocial</h3>
          <span className="loginDesc">
            Connect with friends anf the world around you on <b>NKCsocial</b>
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              required
              placeholder="Email"
              type="email"
              className={error ? "loginInput errorInput" : "loginInput"}
              ref={email}
            />
            <input
              required
              placeholder="Password"
              type="password"
              minLength="6"
              className={error ? "loginInput errorInput" : "loginInput"}
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="inherit" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <Link to="/register">
              <button className="loginRegisterButton">
                Create a New Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
