import React from 'react';

type ErrorProps = {
  message?: string;
};
export const Error: React.FC<ErrorProps> = ({ message }) => {
  return <p>{message || 'Something has gone wrong...'}</p>;
};
