import Task from './Task';

const TaskList = ({ tasks, updateTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} updateTask={updateTask} />
      ))}
    </ul>
  );
};

export default TaskList;
