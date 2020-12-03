import React from 'react';
import Text from 'src/components/Text';

import styles from './styles.module.scss';

interface IProps {}

const PageNameSection: React.FC<IProps> = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Text fontSize="3.375rem" lineHeight={1} textTransform="uppercase" color="black" fontFamily="League Gothic">
          Bands
        </Text>
      </div>
    </div>
  );
};

export default PageNameSection;
