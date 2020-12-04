import React from 'react';

import styles from './styles.module.scss';

const FormWrapper: React.FC = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default FormWrapper;
