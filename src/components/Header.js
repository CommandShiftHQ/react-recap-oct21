import { useAuthentication } from '../providers/Authentication';
import AuthenticationMethod from './AuthenticationMethod';
import SignOut from './SignOut';

const Header = () => {
  const { currentUser } = useAuthentication();

  if (currentUser === undefined) {
    return null;
  }

  return (
    <>
      <h1>TODO List</h1>
      {currentUser ? (
        <>
          <SignOut />
          {currentUser.displayName && <p>Hi {currentUser.displayName}</p>}
          {currentUser.photoURL && <img src={currentUser.photoURL} />}
        </>
      ) : (
        <AuthenticationMethod />
      )}
    </>
  );
};

export default Header;
