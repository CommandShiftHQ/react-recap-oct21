const Task = ({ task, updateTask }) => {
  const inputId = `task-${task.id}`;

  const handleInputChange = (event) => {
    updateTask({
      ...task,
      completed: event.target.checked,
    });
  };

  return (
    <li>
      <input
        id={inputId}
        type="checkbox"
        checked={task.completed}
        onChange={handleInputChange}
      />
      <label
        style={task.completed ? { textDecoration: 'line-through' } : {}}
        htmlFor={inputId}
      >
        {task.title}
      </label>
    </li>
  );
};

export default Task;
