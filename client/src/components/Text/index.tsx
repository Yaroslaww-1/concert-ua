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
}

const Text: React.FC<IProps> = ({
  children,
  fontSize = '1rem',
  textTransform = 'none',
  lineHeight = 1.4,
  wordBreak = 'break-all',
}) => {
  const style = {
    fontSize,
    textTransform,
    lineHeight,
    wordBreak,
  };
  return (
    <div style={{ ...style }} className={styles.root}>
      {children}
    </div>
  );
};

export default Text;
