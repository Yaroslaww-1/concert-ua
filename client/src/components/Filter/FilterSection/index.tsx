import React from 'react';

import styles from './styles.module.scss';

interface IProps {
  classes?: {
    root?: string;
    content?: string;
  };
}

const FilterSection: React.FC<IProps> = ({ classes = {}, children }) => {
  return (
    <div className={`${styles.root} ${classes.root || ''}`}>
      <div className={`${styles.content} ${classes.content || ''}`}>{children}</div>
    </div>
  );
};

export default FilterSection;
