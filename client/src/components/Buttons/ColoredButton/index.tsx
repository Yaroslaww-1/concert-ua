import React from 'react';
import Text from 'src/components/Text';

import styles from './styles.module.scss';
import { TextProps } from 'src/components/Text';

interface IProps {
  text: string;
  variant?: 'red' | 'gray' | 'green';
  disabled?: boolean;
  onClick: () => void;
  classes?: {
    root?: string;
    text?: TextProps;
  };
}

const ColoredButton: React.FC<IProps> = ({ text, onClick, variant = 'red', disabled = false, classes }) => {
  const getColorClass = () => {
    const options = {
      red: styles.red,
      gray: styles.gray,
      green: styles.green,
    };
    return options[variant];
  };

  return (
    <div className={`${styles.root} ${getColorClass()} ${classes?.root || ''}`} onClick={() => !disabled && onClick()}>
      <Text
        textTransform={classes?.text?.textTransform || 'uppercase'}
        fontSize={classes?.text?.fontSize || '1rem'}
        fontWeight={classes?.text?.fontWeight || 750}
      >
        {text}
      </Text>
    </div>
  );
};

export default ColoredButton;
