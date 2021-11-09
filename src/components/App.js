import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [taskState, setTaskState] = useState(TASKS);
  const [catSelected, setCatSelected] = useState('All')


  function handleCatClick(category) {
    setCatSelected(category)
    }

  function  onTaskFormSubmit(addedTask) {
    const updatedTaskList = [...taskState, addedTask]
    setTaskState(updatedTaskList)

  }
  // console.log(taskState)
  const itemsToDisplay = taskState.filter(task => {
    if (catSelected === 'All') return true;
    return task.category === catSelected;
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleCatClick={handleCatClick} catSelected={catSelected}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={itemsToDisplay} setTasks={setTaskState} />
    </div>
  );
}

export default App;
