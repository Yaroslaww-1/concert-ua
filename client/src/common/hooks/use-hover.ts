import { CSSProperties } from '@material-ui/styles';
import React from 'react';

export const useHover = (onHoverStyle: CSSProperties) => {
  const [hover, setHover] = React.useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  const hoverStyle = hover ? onHoverStyle : {};

  return { hoverStyle, onMouseEnter, onMouseLeave };
};
