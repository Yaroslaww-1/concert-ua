import React from 'react';

import styles from './styles.module.scss';

interface IProps {
  fontSize?: string;
  textTransform?:
    | '-moz-initial'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'unset'
    | 'uppercase'
    | 'none'
    | 'capitalize'
    | 'full-size-kana'
    | 'full-width'
    | 'lowercase';
  lineHeight?: number;
  wordBreak?:
    | '-moz-initial'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'unset'
    | 'normal'
    | 'break-all'
    | 'break-word'
    | 'keep-all';
  textAlign?:
    | '-moz-initial'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'unset'
    | 'center'
    | 'end'
    | 'justify'
    | 'left'
    | 'match-parent'
    | 'right'
    | 'start';
  fontWeight?: number;
  classes?: {
    root?: string;
  };
  color?: 'white' | 'black' | 'red' | 'gray';
  letterSpacing?: string;
}

const Text: React.FC<IProps> = ({
  children,
  fontSize = '1rem',
  textTransform = 'none',
  lineHeight = 1.4,
  wordBreak = 'break-all',
  textAlign = 'center',
  fontWeight = 400,
  classes = {
    root: '',
  },
  color = 'white',
  letterSpacing = 'normal',
}) => {
  const getColor = () => {
    switch (color) {
      case 'white':
        return styles.colorWhite;
      case 'black':
        return styles.colorBlack;
      case 'red':
        return styles.colorRed;
      case 'gray':
        return styles.colorGray;
      default:
        return color;
    }
  };
  const style = {
    fontSize,
    textTransform,
    lineHeight,
    wordBreak,
    textAlign,
    fontWeight,
    color: getColor(),
    letterSpacing,
  };
  return (
    <div style={{ ...style }} className={`${styles.root} ${classes.root}`}>
      {children}
    </div>
  );
};

export default Text;
