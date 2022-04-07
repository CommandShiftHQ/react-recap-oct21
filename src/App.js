import Loading from './components/Loading';
import Error from './components/Error';
import TaskList from './components/TaskList';

import { useFetch } from './hooks/useFetch';

const App = () => {
  const [state, tasks, setTasks] = useFetch(process.env.REACT_APP_API_ENDPOINT);

  const updateTask = (updatedTask) => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/${updatedTask.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTask),
    });

    setTasks((previous) => {
      return previous.map((task) =>
        task.id === updatedTask.id ? updatedTask : task,
      );
    });
  };

  return (
    <>
      <h1>TODO List</h1>
      {state === 'PENDING' && <Loading />}
      {state === 'SUCCESS' && (
        <TaskList tasks={tasks} updateTask={updateTask} />
      )}
      {state === 'FAILED' && <Error>Something went wrong</Error>}
    </>
  );
};

export default App;
