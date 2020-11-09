import React from 'react';
import Text from 'src/components/Text';

import styles from './styles.module.scss';

interface IProps {
  text: string;
  color?: 'red';
  onClick: () => void;
}

const BorderlessTransparentButton: React.FC<IProps> = ({ text, onClick, color = 'red' }) => {
  const getColorClass = () => {
    const options = {
      red: styles.red,
    };
    return options[color];
  };

  return (
    <div className={`${styles.root} ${getColorClass()}`} onClick={onClick}>
      <Text textTransform={'uppercase'} fontSize={'1.5em'} fontWeight={750}>
        {text}
      </Text>
    </div>
  );
};

export default BorderlessTransparentButton;
