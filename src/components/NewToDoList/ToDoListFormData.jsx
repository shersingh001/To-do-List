import ToDoListForm from "./ToDoListForm";
import style from './ToDoListFormData.module.css'

const ToDoListFormData = (props) => {
    const formDataHandler = (value) => {
        const formValue = {
            ...value,
            id: Math.random().toString(),
        };
        props.saveformData(formValue);
    };

    return(
        <div className={style.toDoList_Data}>
            <ToDoListForm formData={formDataHandler}/>
        </div>
    );
};

export default ToDoListFormData;