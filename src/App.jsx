import React, { useState } from 'react';
import Task from './Task';
import Form from './Form';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleComplete = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const editTask = (index, newText) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: newText } : task
    );
    setTasks(newTasks);
  };

  return (
    <div className="max-w-md md:max-w-lg mx-auto mt-28 p-6 bg-yellow-300 rounded-lg shadow-2xl shadow-black">
      <h1 className="text-4xl text-center font-bold mb-6">To-Do List</h1>
      <Form addTask={addTask} />
      <ul className="mt-4">
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            toggleComplete={() => toggleComplete(index)}
            deleteTask={() => deleteTask(index)}
            editTask={(newText) => editTask(index, newText)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
