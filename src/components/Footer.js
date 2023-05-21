import React from "react";
import github from "../assets/img/github.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <h5>Follow Us</h5>
        <div>
          <a href="https://github.com/ashu-tosh-singh" target={"blank"}>
            <img src={github} />
          </a>
        </div>
        <p>@all right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
