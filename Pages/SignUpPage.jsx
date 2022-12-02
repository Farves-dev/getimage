import React, { useState } from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import "./SignUpPage.css";

const LoginPage = () => {
  const Navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
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
          <p className="already-account">Already have an account?</p>

          <div className="login-1" onClick={() => Navigate("/login")}>
            Login
          </div>
        </div>
      </nav>

      <div className="form">
        <div className="glassmorphism-1">
          <form className="flex-col" onSubmit={handleSubmit}>
            <p className="join-heading">Join Getimage</p>
            <button className="google">
              <span>
                <BsGoogle className="google-icon" />
              </span>
              Join with Google
            </button>

            <p className="or">OR</p>

            <div className="name-input">
              <input
                type="text"
                className="input-name"
                placeholder="First name"
                required
                value={fname}
                onChange={(e) => {
                  setFname(e.target.value);
                }}
              />

              <input
                type="text"
                className="input-name"
                placeholder="Last name"
                value={lname}
                onChange={(e) => {
                  setLname(e.target.value);
                }}
              />
            </div>

            <input
              type="text"
              className="input"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <input
              type="text"
              className="input"
              placeholder="Password"
              required
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />

            <button className="join-button">Join</button>

            <p className="agree-text">
              By joining, you agree to our Service and Privacy Policy
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
