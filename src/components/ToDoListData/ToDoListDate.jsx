import style from './ToDoListDate.module.css'

const ToDoListDate = (props) => {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
    return (
        <div className={style.dateBox}>
            <div className={style.day}>{day}</div>
            <div className={style.date__month}>{month}</div>
            <div className={style.date__year}>{year}</div>
        </div>
    )
}

export default ToDoListDate;