import React from 'react';

import styles from './styles.module.scss';

export interface TextProps {
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
  fontFamily?: 'Roboto' | 'League Gothic';
  onClick?: () => void;
}

const Text: React.FC<TextProps & { ref?: React.Ref<HTMLDivElement> }> = React.forwardRef<HTMLDivElement, TextProps>(
  (
    {
      children,
      fontSize = '1rem',
      textTransform = 'none',
      lineHeight = 1.4,
      wordBreak = 'break-word',
      textAlign = 'center',
      fontWeight = 400,
      classes = {
        root: '',
      },
      color = 'white',
      letterSpacing = 'normal',
      fontFamily = 'Roboto',
      onClick = () => {},
    },
    ref,
  ) => {
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
    const style: React.CSSProperties = {
      fontSize,
      textTransform,
      lineHeight,
      wordBreak,
      textAlign,
      fontWeight,
      color: getColor(),
      letterSpacing,
      fontFamily,
    };
    return (
      <div ref={ref} style={{ ...style }} className={`${styles.root} ${classes.root}`} onClick={onClick}>
        {children}
      </div>
    );
  },
);

Text.displayName = 'TextComponent';

export default Text;
