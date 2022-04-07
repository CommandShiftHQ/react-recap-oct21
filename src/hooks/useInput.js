import { useState } from 'react';

export const useInput = (initialValues) => {
  const [input, setInput] = useState(initialValues);

  const update = (event) => {
    setInput((previous) => {
      return { ...previous, [event.target.name]: event.target.value };
    });
  };

  const reset = () => {
    setInput(initialValues);
  };

  return [input, update, reset];
};
