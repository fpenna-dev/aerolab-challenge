import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        Realizado por&nbsp;
        <a
          className="footer__link"
          href="https://www.linkedin.com/in/fpenna"
          target="_blank"
          rel="noreferrer"
        >
          Facundo Gabriel Penna
        </a>
        &nbsp;para&nbsp;{" "}
        <a
          className="footer__link"
          href="https://aerolab.co/"
          target="_blank"
          rel="noreferrer"
        >
          Aerolab
        </a>
      </footer>
    </>
  );
};

export default Footer;
