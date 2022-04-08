import { useState, useEffect } from 'react';

import Loading from './components/Loading';
import Error from './components/Error';
import TaskList from './components/TaskList';
import Header from './components/Header';

import { useFetch } from './hooks/useFetch';
import { useAuth } from './providers/Auth';

const App = () => {
  const { currentUser } = useAuth();
  const [url, setUrl] = useState();
  const [state, tasks, update, add] = useFetch(url);

  useEffect(() => {
    if (!currentUser) {
      setUrl(undefined);
      return;
    }

    setUrl(`${process.env.REACT_APP_API_ENDPOINT}?userId=${currentUser}`);
  }, [currentUser]);

  const updateTask = (task) => {
    update(task.id, task);
  };

  const addTask = (title) => {
    add({ title, completed: false });
  };

  return (
    <>
      <Header />
      {state === 'PENDING' && <Loading />}
      {state === 'SUCCESS' && (
        <TaskList tasks={tasks} updateTask={updateTask} addTask={addTask} />
      )}
      {state === 'FAILED' && <Error>Something went wrong</Error>}
    </>
  );
};

export default App;
