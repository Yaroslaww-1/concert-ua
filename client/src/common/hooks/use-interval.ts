import React from 'react';

export const useInterval = (callback: Function, delay: number) => {
  const savedCallback = React.useRef<Function>();

  React.useEffect(() => {
    savedCallback.current = (callback as unknown) as undefined;
  });

  React.useEffect(() => {
    const tick = () => {
      if (savedCallback && savedCallback.current) {
        savedCallback.current();
      }
    };

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
};
