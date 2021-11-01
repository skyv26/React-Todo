import React from "react";
import classes from './CardContainer.module.css';

const CardContainer = (props) => {
    return(
        <div className={`container-fluid ${classes.Container}`}>
            {props.children}
        </div>
    );
};

export default CardContainer;