import classes from './Card.module.css';
import React from 'react';


const Card = (props) => {
    return(
        <div className={classes.card}>
            <div className={classes.image}>
                <img src={props.image} alt=" " />
            </div>
            <div className={classes.title}>
                <h3>{props.title}</h3>
            </div>
            <div className={classes.description}>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default Card;