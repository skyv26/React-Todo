import React, { Fragment, useRef } from "react";

const TodoDataModal = (props) => {
  
    const prevData = props.cardFetched;
     
    // const changedTitle = useRef('');
    // const changedDesc  = useRef(''); 
    let changedTitle = prevData.todo_title;
    let changedDesc  = prevData.todo_desc;
     console.log(changedTitle);
    const titleChangeHandler = (e) =>{
        changedTitle=e.target.value;
    }
    
    const descChangeHandler = (e) =>{
        changedDesc=e.target.value;
    }
    

    const changesHandler = () => {
        console.log("[dsd]",props);
        props.onChanges({
            todo_id: props.cardFetched.todo_id,
            todo_title: changedTitle,
            todo_desc: changedDesc
        });
    }
    
    return (
        <Fragment>
             <div className={`modal fade`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Todo Creation</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Title</label> 
                                <input type="text" className="form-control" id="exampleFormControlInput1" onChange={titleChangeHandler} defaultValue={changedTitle} />
                             </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={descChangeHandler} defaultValue={changedDesc} ></textarea>
                            </div>
                        </div>
                        <div className="modal-footer"> 
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={changesHandler} data-bs-dismiss="modal">{props.mode}</button>
                        </div>
                    </div>
                </div>
            </div>

            </Fragment>
    );
};

export default TodoDataModal;