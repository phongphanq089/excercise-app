import React from "react";
import "./navbar.scss";
import Logo from "../../accsets/image/logo.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

const NarBar = () => {
  const [active, setActive] = useState("");
  return (
    <div className="Navbar">
      <Link to="/">
        <img className="image__logo" src={Logo} alt="" />
      </Link>
      <div className="navbar__menu">
        <Link to="/">
          <h4
            onClick={() => setActive("home")}
            className={active === "home" ? "text-home active" : "text-home"}
          >
            Home
          </h4>
        </Link>
        <a
          onClick={() => setActive("exercises")}
          className={
            active === "exercises" ? "text-exercises active" : "text-exercises"
          }
          href="#exercises"
        >
          Exercise{" "}
        </a>
      </div>
    </div>
  );
};

export default NarBar;
