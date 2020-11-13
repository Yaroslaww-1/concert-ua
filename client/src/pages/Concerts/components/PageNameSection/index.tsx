import React from 'react';
import Text from 'src/components/Text';

import styles from './styles.module.scss';

interface IProps {}

const PageNameSection: React.FC<IProps> = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Text
          fontSize="3.375rem"
          fontWeight={600}
          lineHeight={1}
          textTransform="uppercase"
          color="black"
          letterSpacing="-1px"
        >
          Poster and tickets
        </Text>
      </div>
    </div>
  );
};

export default PageNameSection;
