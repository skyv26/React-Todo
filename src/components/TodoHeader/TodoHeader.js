import React from "react";
import classes from './TodoHeader.module.css';

const TodoHeader = (props) => {
    return (
        <nav className={`container navbar navbar-light bg-light ${classes.Header}`}>
            {props.children}
        </nav>
    );
};


export default TodoHeader;