import React from "react";
import "./modal.css";

const Modal = (props) => {
  const { children, title, text, onClick } = props;
  return (
    <>
      <div className="modal">
        <div className="modal__container">
          <h2 className="modal_title">{title}</h2>
          <p className="modal_title">{text}</p>
          {children}
          <button className="modal__button" onClick={onClick}>
            Cerrar
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
