import { useAuth } from '../providers/Auth';

const SignOut = () => {
  const { signOut } = useAuth();

  const handleButtonClick = () => {
    signOut();
  };

  return <button onClick={handleButtonClick}>Sign Out</button>;
};

export default SignOut;
