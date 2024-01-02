//hook react
import React, { useState } from "react";

//component
import TaskComp from "./TaskComp";
import CreateTask from "./CreateTask";

//data
import initialTasks from "../data.js";

export default function MainComp() {
    
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (taskText) => {
    const newTask = {
      id: Math.max(...tasks.map((t) => t.id)) + 1, // Crea un nuovo ID unico
      text: taskText,
      completed: false,
    };

    //accoda il nuovo oggetto a quelli gia presenti con lo spreadop ...
    setTasks([...tasks, newTask]);

  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="text-white w-72 h-auto text-center rounded-md p-3 shadow-custom bg-gradient-to-tl to-emerald-300  from-indigo-300">

      <h1 className="font-bold mb-4 text-2xl drop-shadow">ToDo List</h1>

      <CreateTask onAddTask={addTask}></CreateTask>

      {tasks.map((task) => (
        <TaskComp
          key={task.id}
          check={task.completed}
          onToggle={() => toggleTaskCompletion(task.id)}
          onRemove={() => removeTask(task.id)}
        >
          {task.text}
        </TaskComp>
      ))}
    </div>
  );
}
