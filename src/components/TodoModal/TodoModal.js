import React, { Fragment } from "react";
import ReactDom from "react-dom";
import TodoDataModal from "./TodoDataModal";

const TodoModal = (props) => {
    return(
        <Fragment>
            <TodoDataModal mode={props.onMode} onConfirm={props.onClick} cardFetched={props.onFetchData} onChanges={props.onUpdateChanges} />
        </Fragment>
    );
};


export default TodoModal;