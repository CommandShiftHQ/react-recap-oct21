import { useAuthentication } from '../providers/Authentication';

const SignOut = () => {
  const { signOut } = useAuthentication();

  const handleClick = () => {
    signOut();
  };

  return <button onClick={handleClick}>Sign Out</button>;
};

export default SignOut;
