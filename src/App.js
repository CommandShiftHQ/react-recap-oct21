import Header from './components/Header';
import TaskPage from './components/TaskPage';

import { useAuthentication } from './providers/Authentication';

const App = () => {
  const { currentUser } = useAuthentication();
  return (
    <>
      <Header />
      {currentUser && <TaskPage />}
    </>
  );
};

export default App;
