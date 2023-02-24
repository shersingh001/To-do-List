import React, { useState } from 'react';
import style from './ToDoListForm.module.css'

const ToDoListForm = (props) => {
    const [userValue, setUserValue] = useState({
        enterDescription : "",
        enterDate : "",
    });
    const [isValid, setIsValid] = useState(true);

    const inputChangeHandler = (event) => {
      if(event.target.value.trim().length > 0){
        setIsValid(true);
      }
        setUserValue((preValue) => {
            return {
                ...preValue,
                enterDescription : event.target.value
            }
        });
    };

    const dateChangeHandler = (event) => {
      if(event.target.value.trim().length > 0){
        setIsValid(true);
      }
        setUserValue((preValue) => {
            return {
                ...preValue,
                enterDate : event.target.value
            }
        });
    };

    const submitBtnHandler = (event) => {
        event.preventDefault();

        const userInputData = {
            title : userValue.enterDescription,
            date : new Date(userValue.enterDate),
        };

        if (userValue.enterDescription.trim().length === 0){
          setIsValid(false);
          return;
        }

        props.formData(userInputData);
        // inputChangeHandler("")
        // dateChangeHandler("")
    }
  return (
    <form onSubmit={submitBtnHandler}>
      <div className={style.toDoListForm_main}>
        <div className={style.toDoListForm_control}>
          <label className={`${!isValid ? style.color : style.toDoListForm_control}`}>Description</label>
          <input type="Search" className={`${!isValid ? style.color : style.toDoListForm_control}`} value={userValue.enterDescription} onChange={inputChangeHandler}/>
        </div>
        <div className={style.toDoListForm_control}>
          <label className={!isValid ? style.color : style.toDoListForm_control}>Date</label>
          <input type="date" value={userValue.enterDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className={style.btn_action}>
          <button type="submit" className={style.toDoList_btn}>Add List</button>
        </div>
    </form>
  );
};

export default ToDoListForm;
