import React from 'react';

export const useScroll = (): [() => void, React.RefObject<HTMLDivElement>] => {
  const elRef: React.RefObject<HTMLDivElement> = React.createRef();
  const executeScroll = () => {
    if (elRef && elRef.current) {
      const targetEl = elRef.current;
      const pos = targetEl.style.position;
      const top = targetEl.style.top;
      targetEl.style.position = 'relative';
      targetEl.style.top = '-40px';
      elRef.current.scrollIntoView({ behavior: 'smooth' });
      targetEl.style.top = top;
      targetEl.style.position = pos;
    }
  };

  return [executeScroll, elRef];
};
