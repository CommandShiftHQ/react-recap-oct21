import Loading from './Loading';
import Error from './Error';
import TaskList from './TaskList';

import { useFetch } from '../hooks/useFetch';

const TaskPage = () => {
  const [state, tasks, update, add] = useFetch(
    process.env.REACT_APP_API_ENDPOINT,
  );

  const updateTask = (task) => {
    update(task.id, task);
  };

  const addTask = (title) => {
    add({ title, completed: false });
  };
  return (
    <>
      {state === 'PENDING' && <Loading />}
      {state === 'SUCCESS' && (
        <TaskList tasks={tasks} updateTask={updateTask} addTask={addTask} />
      )}
      {state === 'FAILED' && <Error>Something went wrong</Error>}
    </>
  );
};

export default TaskPage;
