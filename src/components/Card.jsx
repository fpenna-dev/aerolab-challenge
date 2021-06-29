import React from "react";
import "./card.css";
import coin from "./images/coin.svg";

const Card = (props) => {
  const {
    image,
    category,
    title,
    price,
    classPropCard,
    classPropBtn,
    classPropErr,
    classPropCoin,
    onClick,
  } = props;
  return (
    <>
      <div className={`card ${classPropCard}`}>
        <img src={image} alt="" className="card__image" />
        <p className="card__category">{category}</p>
        <h2 className="card__title">{title}</h2>
        <p className="card__price">
          {price}
          <img className={`card__coin ${classPropCoin}`} src={coin} alt="" />
        </p>
        <button className={`card__button ${classPropBtn}`} onClick={onClick}>
          Comprar
        </button>
        <p className={`card__err ${classPropErr}`}>
          No puedes comprar este producto te faltan 5000
          <img className="card__coin" src={coin} alt="" />
        </p>
      </div>
    </>
  );
};

export default Card;
