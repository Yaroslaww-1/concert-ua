import React from 'react';

import styles from './styles.module.scss';
import Drawer from '@material-ui/core/Drawer/Drawer';
import Text from 'src/components/Text';
import CloseIcon from '@material-ui/icons/Close';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Routes } from 'src/common/enum/routes';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const DrawerComponent: React.FC<IProps & RouteComponentProps> = ({ isOpen, onClose, history }) => {
  return (
    <Drawer classes={{ paper: styles.paper }} anchor="left" open={isOpen} onClose={onClose}>
      <CloseIcon onClick={onClose} className={styles.closeIcon} classes={{ root: styles.closeIcon }} />
      <Text
        color="red"
        fontSize="2rem"
        textTransform="uppercase"
        fontWeight={800}
        textAlign="left"
        classes={{ root: styles.logo }}
      >
        music.ua
      </Text>
      <div className={styles.linkGroup}>
        <Text color="black" onClick={() => history.push(Routes.PROFILE)} textAlign="left" fontSize="1.25rem">
          Profile
        </Text>
        <Text color="black" onClick={() => history.push(Routes.CONCERTS)} textAlign="left" fontSize="1.25rem">
          Events
        </Text>
        <Text color="black" onClick={() => history.push(Routes.CONCERTS)} textAlign="left" fontSize="1.25rem">
          Bands
        </Text>
      </div>
      <div className={styles.linkGroup}>
        <Text color="black" textAlign="left" fontSize="1.25rem">
          About
        </Text>
        <Text color="black" textAlign="left" fontSize="1.25rem">
          Contacts
        </Text>
      </div>
      <div className={styles.linkGroup}>
        <Text color="black" onClick={() => history.push(Routes.PROFILE)} textAlign="left" fontSize="1.25rem">
          Offices
        </Text>
        <Text color="black" onClick={() => history.push(Routes.CONCERTS)} textAlign="left" fontSize="1.25rem">
          Tickets
        </Text>
      </div>
    </Drawer>
  );
};

export default withRouter(DrawerComponent);
