import { useState } from 'react';

import { useInput } from '../hooks/useInput';
import { useAuth } from '../providers/Auth';

const SignIn = () => {
  const { signIn } = useAuth();
  const [error, setError] = useState();
  const [{ username, password }, update, reset] = useInput({
    username: '',
    password: '',
  });

  const handleInputChange = (event) => {
    update(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const signedIn = signIn(username, password);

    if (signedIn) {
      setError(undefined);
      reset();
    } else {
      setError('user or password incorrect');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleInputChange}
      />
      <button type="submit" onClick={handleSubmit}>
        submit
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default SignIn;
