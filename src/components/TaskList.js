import { useState } from 'react';
import Task from './Task';

const TaskList = ({ tasks, updateTask, addTask }) => {
  const [task, setTask] = useState('');

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(task);
    setTask('');
  };

  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} updateTask={updateTask} />
      ))}
      <li>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            value={task}
            onChange={handleInputChange}
          />
        </form>
      </li>
    </ul>
  );
};

export default TaskList;
