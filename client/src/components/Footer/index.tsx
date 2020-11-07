import React from 'react';

import styles from './styles.module.scss';
import Text from 'src/components/Text';
import TextLink from '../TextLink';

interface IProps {}

const Footer: React.FC<IProps> = ({}) => {
  const getLinks = () => {
    const linkElement = <TextLink to={''} text={'Profile Profile'} />;
    return new Array(18).fill(linkElement);
  };
  return (
    <div className={styles.root}>
      <div className={styles.innerRoot}>
        <div className={styles.data}>
          <div className={styles.logo}>
            <Text fontSize="3rem" color="red" fontWeight={800} textAlign="left">
              Music.ua
            </Text>
          </div>
          <div className={styles.links}>{getLinks()}</div>
        </div>
        <div className={styles.info}></div>
      </div>
    </div>
  );
};

export default Footer;
