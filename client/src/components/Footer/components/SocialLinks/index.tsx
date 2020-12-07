import React from 'react';

import styles from './styles.module.scss';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TelegramIcon from '@material-ui/icons/Telegram';

interface IProps {}

const SocialLinks: React.FC<IProps> = ({}) => {
  return (
    <div className={styles.socialIcons}>
      <InstagramIcon />
      <FacebookIcon />
      <YouTubeIcon />
      <TelegramIcon />
    </div>
  );
};

export default SocialLinks;
