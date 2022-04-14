import { useAuthentication } from '../providers/Authentication';
import AuthenticationMethod from './AuthenticationMethod';
import SignOut from './SignOut';

const Header = () => {
  const { currentUser } = useAuthentication();

  return (
    <>
      <h1>TODO List</h1>
      {currentUser ? <SignOut /> : <AuthenticationMethod />}
    </>
  );
};

export default Header;
