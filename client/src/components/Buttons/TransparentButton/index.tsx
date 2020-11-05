import React from 'react';
import Text from 'src/components/Text';

import styles from './styles.module.scss';

interface IProps {
  text: string;
  color?: 'white' | 'red';
  animationType?: 'appearing' | 'growCenter';
  onClick: () => void;
}

const TransparentButton: React.FC<IProps> = ({ text, onClick, color = 'white', animationType = 'appearing' }) => {
  const getColorClass = () => {
    const options = {
      white: styles.white,
      red: styles.red,
    };
    return options[color];
  };

  const getAnimationClass = () => {
    const options = {
      appearing: styles.appearing,
      growCenter: styles.growCenter,
    };
    return options[animationType];
  };

  return (
    <div className={`${styles.root} ${getColorClass()} ${getAnimationClass()}`} onClick={onClick}>
      <Text textTransform={'uppercase'} fontSize={'1.5em'}>
        {text}
      </Text>
    </div>
  );
};

export default TransparentButton;
