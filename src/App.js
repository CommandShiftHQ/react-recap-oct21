import Loading from './components/Loading';
import Error from './components/Error';
import TaskList from './components/TaskList';
import Header from './components/Header';

import { useFetch } from './hooks/useFetch';
import { AuthenticationProvider } from './providers/Authentication';

const App = () => {
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
    <AuthenticationProvider>
      <Header />
      {state === 'PENDING' && <Loading />}
      {state === 'SUCCESS' && (
        <TaskList tasks={tasks} updateTask={updateTask} addTask={addTask} />
      )}
      {state === 'FAILED' && <Error>Something went wrong</Error>}
    </AuthenticationProvider>
  );
};

export default App;
