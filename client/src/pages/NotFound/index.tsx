import React from 'react';

import styles from './styles.module.scss';
import PageComponent from 'src/components/Page';
import { Typography } from '@material-ui/core';
import ShowMore from './components/ShowMore';

const NotFoundPage: React.FC = () => {
  return (
    <PageComponent loading={false} withoutNavbar={true} className={styles.pageWrapper}>
      <div className={styles.pageContentWrapper}>
        <div className={styles.textWrapper}>
          <Typography variant="h2" component="h1" className={styles.notFoundText}>
            Page was not found :(
          </Typography>
          <h1>Do not worry! Try some poplar events we prepared for you:</h1>
        </div>
        <div className={styles.listWrapper}>
          <ShowMore />
          <ShowMore />
          <ShowMore />
          <ShowMore />
        </div>
      </div>
    </PageComponent>
  );
};

export default NotFoundPage;
