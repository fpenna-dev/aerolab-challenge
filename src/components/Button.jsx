import React from "react";
import "./button.css";

const Button = (props) => {
  const { text } = props;
  return (
    <>
      <button className="button">{text}</button>
    </>
  );
};

export default Button;
