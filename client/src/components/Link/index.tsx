import React from 'react';

import styles from './styles.module.scss';
import Text from '../Text';

interface IProps {
  text: string;
  onClick: () => void;
}

const Link: React.FC<IProps> = ({ text, onClick }) => {
  return (
    <div className={styles.root} onClick={onClick}>
      <Text
        color="gray"
        fontSize="1rem"
        fontFamily="Roboto"
        fontWeight={500}
        letterSpacing="0.2px"
        textTransform="uppercase"
      >
        {text}
      </Text>
    </div>
  );
};

export default Link;
