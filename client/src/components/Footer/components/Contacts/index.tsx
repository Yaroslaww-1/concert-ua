import React from 'react';

import styles from './styles.module.scss';
import Text from 'src/components/Text';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';

interface IProps {}

const Contacts: React.FC<IProps> = ({}) => {
  return (
    <div className={styles.contacts}>
      <div className={styles.contact}>
        <HomeIcon />
        <Text color="gray">+38 (066) 555 35 35</Text>
      </div>
      <div className={styles.contact}>
        <HomeIcon />
        <Text color="gray">+38 (066) 555 35 35</Text>
      </div>
      <div className={styles.contact}>
        <PhoneIcon />
        <Text color="gray">+38 (066) 555 35 35</Text>
      </div>
      <div className={styles.contact}>
        <PhoneIcon />
        <Text color="gray">+38 (066) 555 35 35</Text>
      </div>
      <div className={styles.contact}>
        <PhoneIcon />
        <Text color="gray">+38 (066) 555 35 35</Text>
      </div>
      <div className={styles.contactUs}>
        <Text color="gray" textAlign="left" wordBreak="break-word">
          Contact us and we will answer your questions
        </Text>
      </div>
    </div>
  );
};

export default Contacts;
