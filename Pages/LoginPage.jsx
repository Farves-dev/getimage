import React, { useState } from "react";
import "./LoginPage.css";
import "./SignUpPage.css";
import { Link, useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";

const LoginPage = () => {
  const Navigate = useNavigate();
  const [emailval, setEmailval] = useState("");
  const [passval, setPassval] = useState("");
  const [nav, setNav] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const change = () => {
    if (window.scrollY >= 10) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", change);

  return (
    <>
      <nav className={nav ? "active" : ""}>
        <Link to="/">
          <img src="../assets/getimage_logo.png" alt="Logo" className="logo" />
        </Link>

        <div className="login-account">
          <p className="already-account">Don't have an account?</p>

          <div className="login-1" onClick={() => Navigate("/signup")}>
            Join
          </div>
        </div>
      </nav>

      <div className="form">
        <div className="glassmorphism-1 glass-1">
          <form className="flex-col" onSubmit={handleSubmit}>
            <p className="join-heading">Welcome back</p>

            <button className="google">
              <span>
                <BsGoogle className="google-icon" />
              </span>
              Login with Google
            </button>

            <p className="or">OR</p>

            <input
              type="text"
              className="input"
              placeholder="Email"
              required
              value={emailval}
              onChange={(e) => {
                setEmailval(e.target.value);
              }}
            />

            <input
              type="text"
              className="input"
              placeholder="Password"
              required
              value={passval}
              onChange={(e) => {
                setPassval(e.target.value);
              }}
            />

            <button className="join-button">Login</button>

            <p className="agree-text">Forgot your password?</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
