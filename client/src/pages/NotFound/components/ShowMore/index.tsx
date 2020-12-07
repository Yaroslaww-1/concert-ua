import { Typography } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Routes } from 'src/common/enum/routes';
import Text from 'src/components/Text';

import styles from './styles.module.scss';

const ShowMore: React.FC = () => {
  return (
    <div className={styles.root}>
      <NavLink to={Routes.CONCERTS}>
        <Text color="white" fontSize="4rem" lineHeight={1} fontWeight={700} classes={{ root: styles.textRoot }}>
          Show <br /> more
        </Text>
      </NavLink>
    </div>
  );
};

export default ShowMore;
