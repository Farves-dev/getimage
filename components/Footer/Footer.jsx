import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <ul className="texts">
        <li>Privacy Policy</li>
        <li>Terms</li>
        <li>Security</li>
      </ul>

      <div className="social-icons">
        <a href="https://www.facebook.com/" target="_blank">
          <FaFacebookF className="icon-link facebook" />
        </a>

        <a href="https://www.twitter.com/" target="_blank">
          <FaTwitter className="icon-link twitter" />
        </a>

        <a href="https://www.instagram.com/" target="_blank">
          <RiInstagramFill className="icon-link instagram" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
