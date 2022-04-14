import { useState } from 'react';
import { useForm } from '../hooks/useForm';
import { useAuthentication } from '../providers/Authentication';

const SignUp = () => {
  const [error, setError] = useState();
  const [form, updateForm, resetForm] = useForm({
    email: '',
    password: '',
    passwordConfirmation: '',
  });
  const { signUp } = useAuthentication();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      form.email &&
      form.password &&
      form.password === form.passwordConfirmation
    ) {
      signUp(form.email, form.password)
        .then(() => {
          resetForm();
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      setError('email and password cannot be empty');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        placeholder="Enter your email address"
        value={form.email}
        onChange={updateForm}
      />
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={updateForm}
      />
      <input
        type="password"
        name="passwordConfirmation"
        value={form.passwordConfirmation}
        onChange={updateForm}
      />
      <button type="submit" onClick={handleSubmit}>
        submit
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default SignUp;
