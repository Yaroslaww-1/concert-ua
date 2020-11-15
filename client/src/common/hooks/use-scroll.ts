import React from 'react';

export const useScroll = (): [() => void, React.RefObject<HTMLDivElement>] => {
  const elRef = React.createRef<HTMLDivElement>();
  const executeScroll = () => {
    if (elRef && elRef.current) {
      elRef.current.scrollIntoView();
    }
  };

  return [executeScroll, elRef];
};
