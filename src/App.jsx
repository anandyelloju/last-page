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
      <h1 className="text-4xl text-center font-bold mb-3">Last Page</h1>
      <p className="text-center font-semibold mb-3">Organize, Prioritize, and Conquer: The Modern To-Do List</p>
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
