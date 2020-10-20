import React from 'react';
import styles from './styles.module.scss';

interface IProps {
  profileNamePreview: string;
}

const ProfileIcon: React.FC<IProps> = ({ profileNamePreview }): JSX.Element => {
  return <div className={styles.profileIcon}>{profileNamePreview}</div>;
};

export default ProfileIcon;
