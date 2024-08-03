import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckToSlot, faTrashCan, faEdit, faSave } from '@fortawesome/free-solid-svg-icons';

function Task({ task, toggleComplete, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(newText);
    setIsEditing(false);
  };

  return (
    <li className="flex justify-between items-center p-2 border-b bg-white">
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="flex-1 p-2 border rounded-md focus:outline-none"
        />
      ) : (
        <span className={`flex-1 ${task.completed ? 'line-through' : ''}`}>
          {task.text}
        </span>
      )}
      <div >
        <button
          className="mx-2 p-1 text-xl text-gray-600 hover:text-gray-800"
          onClick={toggleComplete}>
          <FontAwesomeIcon icon={faCheckToSlot} />
        </button>

        {isEditing ? (
          <button
            className="mx-2 p-1 text-xl text-gray-600 hover:text-gray-800"
            onClick={handleSave}>
            <FontAwesomeIcon icon={faSave} />
          </button>
        ) : (
          <button
            className="mx-2 p-1 text-xl text-gray-600 hover:text-gray-800"
            onClick={handleEdit}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
        )}
        
        <button
          className="mx-2 p-1 text-lg text-gray-600 hover:text-gray-800"
          onClick={deleteTask}>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </li>
  );
}

export default Task;
