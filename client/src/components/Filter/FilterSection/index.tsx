import React from 'react';

import styles from './styles.module.scss';

interface IProps {}

const FilterSection: React.FC<IProps> = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default FilterSection;
