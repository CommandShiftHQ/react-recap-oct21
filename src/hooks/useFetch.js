import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [requestResponse, setRequestResponse] = useState();
  const [requestState, setRequestState] = useState('INITIAL');

  useEffect(() => {
    setRequestState('PENDING');

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setRequestResponse(response);
        setRequestState('SUCCESS');
      })
      .catch(() => setRequestState('FAILED'));
  }, [url]);

  return [requestState, requestResponse];
};
