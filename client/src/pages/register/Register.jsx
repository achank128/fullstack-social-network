import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Register() {
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Password don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        const res = await axios.post(
          "http://localhost:5000/api/auth/register",
          user
        );
        history("/login");
      } catch (error) {
        console.log(error);
      }
    }
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
              placeholder="Email"
              type="text"
              className="loginInput"
              ref={email}
              required
            />
            <input
              placeholder="Username"
              type="text"
              className="loginInput"
              ref={username}
              required
            />
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
              ref={password}
              required
            />
            <input
              placeholder="Password Again"
              type="password"
              className="loginInput"
              ref={passwordAgain}
            />

            <button className="loginButton" type="submit">
              Sign Up
            </button>

            <Link to="/login">
              <button className="loginRegisterButton">Log into Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
