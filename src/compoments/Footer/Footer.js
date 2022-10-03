import React from "react";
import "./Footer.scss";

import logo from "../../accsets/image/logo.jpg";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="about__footer">
        <div className="logo__footer">
          <img src={logo} alt="" />
          <h4>Golds gym ❤😍</h4>
        </div>
        <div className="icon__footer">
          <h3>Create Projects with me💕</h3>
          <div className="icon-me">
            <a
              href="https://www.facebook.com/profile.php?id=100013596668789"
              target="blank"
            >
              <BsFacebook />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100013596668789"
              target="blank"
            >
              <AiFillYoutube />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100013596668789"
              target="blank"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100013596668789"
              target="blank"
            >
              <AiFillTwitterSquare />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
