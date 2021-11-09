import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const newCategories = categories.slice(1);

  const [newTask, setNewTask] = useState("")
  const [newCategory, setNewCategory] = useState("Code")


  function handleNewTaskChange(event) {
    setNewTask(event.target.value);
  }
  function handleNewCatChange(event) {
    setNewCategory(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const addedTask = {
      text: newTask,
      category: newCategory
    }
    onTaskFormSubmit(addedTask);
  }


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newTask} onChange={handleNewTaskChange}/>
      </label>
      <label>
        Category
        <select name="category" value={newCategory} onChange={handleNewCatChange}>
          {newCategories.map((newCat) => (
            <option key={newCat}>{newCat}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
