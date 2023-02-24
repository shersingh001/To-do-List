import style from './ToDoListUserData.module.css'
import ToDoListRender from "./ToDoListRender";

const ToDoListUserData = (props) => {
    let userContent = <p>No List Found!</p>
    if(props.userData.length > 0){
        userContent = props.userData.map((data) => (
            <ToDoListRender
                key={data.id}
                id={data.id}
                title={data.title}
                date={data.date}
                onDelete={props.onDeleteItem}
            />
        ))
    }
    return (
        <div className={style.dataBox}>
        {userContent}
    </div>
    )
}
export default ToDoListUserData;