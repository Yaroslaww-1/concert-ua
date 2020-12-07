import React from 'react';

import styles from './styles.module.scss';
import Text from 'src/components/Text';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Routes } from 'src/common/enum/routes';

const LogoHeader: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <div className={styles.root}>
      <Text
        color="red"
        fontSize="3rem"
        textTransform="uppercase"
        letterSpacing="1px"
        fontWeight={900}
        onClick={() => history.push(Routes.DEFAULT)}
      >
        Music.ua
      </Text>
    </div>
  );
};

export default withRouter(LogoHeader);
