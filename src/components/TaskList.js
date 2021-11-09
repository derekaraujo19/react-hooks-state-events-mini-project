import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTasks }) {


  function handleDelete(currentTask) {
    // console.log(taskState)
    const filteredTasks = tasks.filter(task => {
      return currentTask !== task;
    })
    // console.log(task)
    // console.log(currentTask)
    setTasks(filteredTasks);
  }

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.text} task={task} text={task.text} category={task.category} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default TaskList;
