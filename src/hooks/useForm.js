import { useState } from 'react';

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const updateForm = (event) => {
    setForm((previous) => {
      return {
        ...previous,
        [event.target.name]: event.target.value,
      };
    });
  };

  const resetForm = () => {
    setForm(initialState);
  };

  return [form, updateForm, resetForm];
};
