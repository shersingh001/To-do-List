import React, { useState } from "react";
import ToDoListFormData from "./components/NewToDoList/ToDoListFormData";
import ToDoListUserData from "./components/ToDoListData/ToDoListUserData";

const Dummy_data = [
  {title:"Car Wash",id:"g1",date:new Date(2020, 10, 15, 10, 45)},
  {title:"Job Work",id:"g2",date:new Date(2021, 12, 25, 10, 45)},
  {title:"Laptop",id:"g3",date:new Date(2022, 2, 2, 10, 45)},
  {title:"Bike Wash",id:"g4",date:new Date(2023, 1, 15, 10, 45)},
]

const App = () => {

  // const [myValue, setValue] = useState(new Date());
  // setValue(new Date(2020, 10, 15, 10, 45));
  // const onChange = useCallback((ev) => {
  //     setValue(ev.value);
  // });

  const [userData, setUserData] = useState(Dummy_data);

  const saveFormData = (saveData) => {
    setUserData((preState) => {
      return ([saveData, ...preState]);
    });
  };


  const deleteItemHandler = (listId) => {
    setUserData((preState) => {
      const updatedValue = preState.filter((list) => list.id !== listId)
      return updatedValue;
    });
  }

  return (
    <div>
    <ToDoListFormData saveformData={saveFormData}/>
    <ToDoListUserData userData={userData} onDeleteItem={deleteItemHandler}/>
    </div>
  )
}

export default App;