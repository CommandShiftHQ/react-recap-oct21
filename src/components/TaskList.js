import Task from './Task';
import TaskForm from './TaskForm';

const TaskList = ({ tasks, updateTask, addTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} updateTask={updateTask} />
      ))}
      <li>
        <TaskForm addTask={addTask} />
      </li>
    </ul>
  );
};

export default TaskList;
