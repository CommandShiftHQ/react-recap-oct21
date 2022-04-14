import { useState } from 'react';

import SignUp from './SignUp';
import SignIn from './SignIn';
import { useAuthentication } from '../providers/Authentication';

const AuthenticationMethod = () => {
  const [authMethod, setAuthMethod] = useState();
  const { signInWithGoogle } = useAuthentication();

  const handleClick = (method) => {
    setAuthMethod(method);
  };

  if (authMethod === undefined) {
    return (
      <>
        <button onClick={() => handleClick('sign-up')}>Sign Up</button>
        <button onClick={() => handleClick('sign-in')}>Sign In</button>
        <button onClick={() => signInWithGoogle()}>Sign In With Google</button>
      </>
    );
  }

  if (authMethod === 'sign-up') {
    return <SignUp />;
  }

  return <SignIn />;
};

export default AuthenticationMethod;
