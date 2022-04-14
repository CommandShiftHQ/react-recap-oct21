import { useState } from 'react';

import SignUp from './SignUp';
import SignIn from './SignIn';

const AuthenticationMethod = () => {
  const [authMethod, setAuthMethod] = useState();

  const handleClick = (method) => {
    setAuthMethod(method);
  };

  if (authMethod === undefined) {
    return (
      <>
        <button onClick={() => handleClick('sign-up')}>Sign Up</button>
        <button onClick={() => handleClick('sign-in')}>Sign In</button>
      </>
    );
  }

  if (authMethod === 'sign-up') {
    return <SignUp />;
  }

  return <SignIn />;
};

export default AuthenticationMethod;
