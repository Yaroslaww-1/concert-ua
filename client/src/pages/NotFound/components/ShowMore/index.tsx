import { Typography } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Routes } from 'src/common/enum/routes';

import styles from './styles.module.scss';

const ShowMore: React.FC = () => {
  return (
    <NavLink to={Routes.CONCERTS}>
      <div className={styles.showMoreWrapper}>
        <Typography variant="h2" component="h1">
          Show <br /> more
        </Typography>
      </div>
    </NavLink>
  );
};

export default ShowMore;
