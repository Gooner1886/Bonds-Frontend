import classes from "./Card.module.css";
import React from "react";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <img src={props.image} alt=" " />
      </div>
      <div className={classes.title}>
        <h3>{props.title}</h3>
      </div>
      <div className={classes.description}>
        <p>Coupon: {props.description.coupon}</p>
        <p>Cusip: {props.description.cusip}</p>
        <p>Face Value: {props.description.faceValue}</p>
        <p>ISIN: {props.description.isin}</p>
        <p>Maturity Date: {props.description.maturityDate}</p>
        <p>Status: {props.description.status}</p>
      </div>
    </div>
  );
};

export default Card;
