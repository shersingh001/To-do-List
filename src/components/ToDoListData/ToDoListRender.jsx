import React, { useState } from 'react';
import ToDoListDate from './ToDoListDate'
import style from './ToDoListRender.module.css'

const ToDoListRender = (props) => {
    const [activeCheckInput, setActiveCheckInput] = useState(false);

    const userDate = props.date;
    const currentDate = new Date();
    let content;

    if(userDate < currentDate){
        content = <p>due date passed</p>;
    }

    const deletHandler = () => {
        props.onDelete(props.id)
    };
    const checkInputHandler = (event) => {
        if(event.target.checked === true){
            setActiveCheckInput(true);
        }
        else{
            setActiveCheckInput(false)
        }
    };
    return(
        <div className={`${style.innerDivBox}`}>
            <ToDoListDate date={props.date}/>
            <div className={`${style.titleBox} ${activeCheckInput && style.checkInput}`}> <h2>{props.title}</h2> {content} </div>
            <div className={style.moreFunction}>
            <input type="checkbox" onChange={checkInputHandler}/>
            <button onClick={deletHandler}>Delete</button>
            </div>
        </div>
    )
}

export default ToDoListRender;