import React from 'react';

type LoadingProps = {
  message?: string;
};
export const Loading: React.FC<LoadingProps> = ({ message }) => {
  return <p>{message || 'Loading...'}</p>;
};
