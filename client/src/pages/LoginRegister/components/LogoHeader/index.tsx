import React from 'react';

import styles from './styles.module.scss';
import Text from 'src/components/Text';

const LogoHeader: React.FC = () => {
  return (
    <div className={styles.root}>
      <Text color="red" fontSize="3rem" textTransform="uppercase" letterSpacing="1px" fontWeight={900}>
        Music.ua
      </Text>
    </div>
  );
};

export default LogoHeader;
