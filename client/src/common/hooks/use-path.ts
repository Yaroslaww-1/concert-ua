import React from 'react';

export const usePath = () => {
  const [path, setPath] = React.useState(window.location.search);
  const listenToPopstate = () => {
    const winPath = window.location.search;
    setPath(winPath);
  };
  React.useEffect(() => {
    window.addEventListener('popstate', listenToPopstate);
    return () => {
      window.removeEventListener('popstate', listenToPopstate);
    };
  }, []);
  return path;
};
