import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";
import { AiOutlineArrowUp } from "react-icons/ai";

const Nav = () => {
  let Navigate = useNavigate();
  const [nav, setNav] = useState(false);

  const change = () => {
    if (window.scrollY >= 10) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", change);

  return (
    <nav className={nav && "active"}>
      <Link to="/">
        <img src="../assets/getimage_logo.png" alt="Logo" className="logo" />
      </Link>

      <a className={nav ? "show" : "hidden"} href="#hero" title="Go to top">
        <AiOutlineArrowUp />
      </a>

      <div className="menus">
        <div className="login" onClick={() => Navigate("/login")}>
          Login
        </div>

        <div className="signup" onClick={() => Navigate("/signup")}>
          Sign Up
        </div>
      </div>
    </nav>
  );
};

export default Nav;
