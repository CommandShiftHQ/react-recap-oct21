import { useState } from 'react';

const Task = ({ task }) => {
  const [item, setItem] = useState(task);

  const inputId = `task-${item.id}`;

  const handleInputChange = (event) => {
    setItem({
      ...item,
      completed: event.target.checked,
    });

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/${item.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: event.target.checked }),
    });
  };

  return (
    <li>
      <input
        id={inputId}
        type="checkbox"
        checked={item.completed}
        onChange={handleInputChange}
      />
      <label
        style={item.completed ? { textDecoration: 'line-through' } : {}}
        htmlFor={inputId}
      >
        {item.title}
      </label>
    </li>
  );
};

export default Task;
