import SignIn from './SignIn';
import SignOut from './SignOut';

import { useAuth } from '../providers/Auth';

const Header = () => {
  const { currentUser } = useAuth();
  return (
    <header>
      <h1>TODO List</h1>
      {currentUser ? <SignOut /> : <SignIn />}
    </header>
  );
};

export default Header;
