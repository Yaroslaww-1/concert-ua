import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { redirectToProfile } from 'src/common/url/redirect-to-profile';
import styles from './styles.module.scss';

interface IProps {
  profileNamePreview: string;
}

const ProfileIcon: React.FC<IProps & RouteComponentProps> = ({ profileNamePreview, history }): JSX.Element => {
  return (
    <div className={styles.root} onClick={() => redirectToProfile(history)}>
      <div className={styles.namePreview}>{profileNamePreview}</div>
    </div>
  );
};

export default withRouter(ProfileIcon);
