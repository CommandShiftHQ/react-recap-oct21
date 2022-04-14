import { useForm } from '../hooks/useForm';

const TaskForm = ({ addTask }) => {
  const [{ task }, update, reset] = useForm({ task: '' });

  const handleInputChange = (event) => {
    update(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(task);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        value={task}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default TaskForm;
