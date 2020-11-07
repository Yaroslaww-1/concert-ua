import React from 'react';

import styles from './styles.module.scss';
import Text from 'src/components/Text';
import TextLink from '../TextLink';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TelegramIcon from '@material-ui/icons/Telegram';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import { style } from '@material-ui/system';

interface IProps {}

const Footer: React.FC<IProps> = ({}) => {
  const getLinks = () => {
    const linkElement = <TextLink to={''} text={'Profile Profile'} />;
    return new Array(18).fill(linkElement);
  };
  return (
    <div className={styles.root}>
      <div className={styles.innerRoot}>
        <div className={styles.topFooter}>
          <div className={styles.data}>
            <div className={styles.logo}>
              <Text fontSize="3rem" color="red" fontWeight={800} textAlign="left">
                Music.ua
              </Text>
            </div>
            <div className={styles.links}>{getLinks()}</div>
          </div>
          <div className={styles.info}>
            <div className={styles.socialIcons}>
              <InstagramIcon />
              <FacebookIcon />
              <YouTubeIcon />
              <TelegramIcon />
            </div>
            <div className={styles.contacts}>
              <div className={styles.contact}>
                <HomeIcon />
                <Text color="red">+38 (066) 555 35 35</Text>
              </div>
              <div className={styles.contact}>
                <HomeIcon />
                <Text color="red">+38 (066) 555 35 35</Text>
              </div>
              <div className={styles.contact}>
                <PhoneIcon />
                <Text color="red">+38 (066) 555 35 35</Text>
              </div>
              <div className={styles.contact}>
                <PhoneIcon />
                <Text color="red">+38 (066) 555 35 35</Text>
              </div>
              <div className={styles.contact}>
                <PhoneIcon />
                <Text color="red">+38 (066) 555 35 35</Text>
              </div>
              <div className={styles.contactUs}>
                <Text color="gray" textAlign="left">
                  Contact us and we will answer your questions
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomFooter}>
          <div className={styles.copyright}>
            <Text color="gray" textAlign="left">
              © 2020 Music Service Music.ua. All rights reserved.
            </Text>
          </div>
          <div className={styles.logos}>
            <div className={styles.mastercardLogo}></div>
            <div className={styles.visaLogo}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
