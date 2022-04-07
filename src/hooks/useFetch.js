import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [requestResponse, setRequestResponse] = useState();
  const [requestState, setRequestState] = useState('INITIAL');

  useEffect(() => {
    if (!url) {
      return;
    }

    setRequestState('PENDING');

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setRequestResponse(response);
        setRequestState('SUCCESS');
      })
      .catch(() => setRequestState('FAILED'));
  }, [url]);

  const updateRequest = (id, request) => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request),
    });

    setRequestResponse((previous) => {
      return previous.map((object) => (object.id === id ? request : object));
    });
  };

  return [requestState, requestResponse, updateRequest];
};
