import React, { Fragment } from "react";
import TodoListData from "./components/TodoListData/TodoListData";
import TodoHeader from "./components/TodoHeader/TodoHeader";

const App = () => {
    return (
        <Fragment>
            <TodoHeader />
            <TodoListData />
        </Fragment>
    );
};

export default App;