// TodoItem.js

import React, { useState } from 'react';

function TodoItem({ index, todo, toggleComplete, deleteTodo }) {
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    // Save the edited text
    toggleComplete(index, editedText); // Pass edited text to the toggleComplete function
    setEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(index)}
      />
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
      )}
      <span className="due-date">Due: {todo.dueDate}</span>
      <span className="priority">Priority: {todo.priority}</span>
      <div>
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </>
        )}
      </div>
    </li>
  );
}

export default TodoItem;
