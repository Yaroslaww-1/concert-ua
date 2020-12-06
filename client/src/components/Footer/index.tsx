import React from 'react';

import styles from './styles.module.scss';
import Text from 'src/components/Text';
import TextLink from '../TextLink';
import Contacts from './components/Contacts';
import SocialLinks from './components/SocialLinks';

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
            <SocialLinks />
            <Contacts />
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
