import Task from './Task';
import { useInput } from '../hooks/useInput';

const TaskList = ({ tasks, updateTask, addTask }) => {
  const [{ task }, update, reset] = useInput({ task: '' });

  const handleInputChange = (event) => {
    update(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(task);
    reset();
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
