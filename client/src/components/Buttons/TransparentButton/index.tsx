import React from 'react';

import styles from './styles.module.scss';

interface IProps {
  text: string;
  onClick: () => void;
}

const TransparentButton: React.FC<IProps> = ({ text, onClick }) => {
  return (
    <div className={styles.root} onClick={onClick}>
      <h1>{text}</h1>
    </div>
  );
};

export default TransparentButton;
