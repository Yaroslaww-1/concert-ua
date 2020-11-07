import React from 'react';

import styles from './styles.module.scss';
import { NavLink } from 'react-router-dom';
import Text from '../Text';

interface IProps {
  to: string;
  text: string;
  style?: 'greyRed';
}

const TextLink: React.FC<IProps> = ({ to, text, style = 'greyRed' }) => {
  const styleOptions = {
    greyRed: styles.greyRed,
  };
  return (
    <div className={styles.root}>
      <NavLink to={to} className={styleOptions[style]}>
        <Text fontSize="1.25rem" color="gray" textAlign="left" fontWeight={500}>
          {text}
        </Text>
      </NavLink>
    </div>
  );
};

export default TextLink;
