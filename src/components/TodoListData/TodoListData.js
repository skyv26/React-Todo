import React, { useState, Fragment } from "react";
import CardContainer from "../CardContainer/CardContainer";
import Card from "../Card/Card";
import TodoModal from "../TodoModal/TodoModal";
import uuid from "uuid";

const TodoListData = () => {

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];


    // const monthNames = ["January", "February", "March", "April", "May", "June",
    //     "July", "August", "September", "October", "November", "December"
    // ];

    const DateFormatter = (dateStr) => {
        let year = dateStr.getFullYear();
        let month = dateStr.getMonth();
        let date = dateStr.getDate();

        return `${monthNames[month]}-${date}, ${year}`;
    }


    const todoListData = [
        {
            // todo_id: uuid.v4(),
            todo_id: 1,
            todo_title: "Dairy Product",
            todo_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis excepturi nisi animi natus eum accusamus",
            created_on: DateFormatter(new Date("January-31, 1995"))
        },
        {
            // todo_id: uuid.v4(),
            todo_id: 3,
            todo_title: "Shopping",
            todo_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis excepturi nisi animi natus eum accusamus",
            created_on: DateFormatter(new Date("Febuary-04, 2010"))
        },
        {
            // todo_id: uuid.v4(),
            todo_id: 4,
            todo_title: "Love",
            todo_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis excepturi nisi animi natus eum accusamus",
            created_on: DateFormatter(new Date("November-11, 2021"))
        }
    ];

    const [currentTodo, updatedTodo] = useState(todoListData);

    const [ currentFetchedObj, updatedFetchedObj ] = useState({todo_id: '', todo_title: '', todo_desc: ''});
    
    const [modalVisible, modalVisibility] = useState(false);

    const specialHandler = (objID, mode = "delete") => {
        if (mode === "delete") {
            updatedTodo(
                currentTodo.filter((item) => {
                    return item.todo_id !== objID;
                })
            );
        }
        if (mode === "update") {
            modalVisibility(true);
            updatedFetchedObj(currentTodo.filter((item) => {
                return item.todo_id === objID;
            })[0]);
        }
    }

    const onClickChangesHandler = (prevData) => {
        // console.log("[TodoList]",prevData);
        updatedTodo( (prevState) =>
            prevState.map( (eachTodo) => {
                if(eachTodo.todo_id === prevData.todo_id){
                    eachTodo.todo_title = prevData.todo_title;
                    eachTodo.todo_desc  = prevData.todo_desc;
                    eachTodo.created_on = DateFormatter(new Date())
                }
                return eachTodo;
            })
         );
    };

    // const todoDeleteHandler = (objID) => {
    //     updatedTodo([
    //         currentTodo.filter((obj) => {
    //             return obj.todo_id !== objID;
    //         })
    //     ]);
    // };

    return (
        <Fragment>
            { modalVisible===true ? <TodoModal onMode={"Update"} onFetchData={currentFetchedObj} onUpdateChanges={onClickChangesHandler} /> : <TodoModal onMode={"Update"} onFetchData={currentFetchedObj} /> }
            <CardContainer>
                {currentTodo.map(
                    (todo) => {
                        return <Card cardID={todo.todo_id} cardTitle={todo.todo_title} cardDesc={todo.todo_desc} cardCreation={todo.created_on} key={todo.todo_id} updateClick={specialHandler} />
                    }
                )}
            </CardContainer>
        </Fragment>
    );
};

export default TodoListData;